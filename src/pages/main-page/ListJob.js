import React from "react";
import { Button, Card, ListGroup, Spinner } from "react-bootstrap";
import { GeoAltFill, Stopwatch, Calendar2 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import imgAlt from "../../assets/img/Polaroid.svg";

export const ListJob = ({
  data = [],
  isLoading = false,
  hasMore = true,
  isLoadingMore = false,
  onLoadMore = () => {},
}) => {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail/${id}`, {
      state: {
        id: id,
      },
    });
  };
  return (
    <>
      <Card>
        <Card.Header className="bg-white">
          <h2>Job list</h2>
        </Card.Header>
        <Card.Body className="p-0">
          {isLoading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "300px" }}
            >
              <Spinner animation="grow" />
            </div>
          ) : data?.length <= 0 ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "300px" }}
            >
              <h3>Job not found</h3>
            </div>
          ) : (
            <ListGroup variant="flush">
              {data.map((item, idx) => (
                <ListGroup.Item key={idx}>
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src="img/com-logo-2.jpg"
                        alt={item.title}
                        style={{
                          width: "80px",
                          height: "80px",
                        }}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = imgAlt;
                        }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">{item.title}</h5>
                        <span className="text-truncate me-3 align-middle align-items-center">
                          <GeoAltFill className="me-2" />
                          {item.location}
                        </span>
                        <span className="text-truncate me-3 align-middle align-items-center">
                          <Stopwatch className="me-2" />
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <Button
                          onClick={() => {
                            handleDetail(item.id);
                          }}
                        >
                          Read more →
                        </Button>
                      </div>
                      <span className="text-truncate align-middle align-items-center">
                        <Calendar2 className="me-2" />
                        {item.created_at}
                      </span>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
      {!isLoading && hasMore && data?.length >= 1 && (
        <div className="d-grid gap-2 mt-3">
          <Button
            variant="dark"
            className="btn-block"
            disabled={isLoadingMore}
            onClick={!isLoadingMore ? onLoadMore : null}
          >
            {isLoadingMore ? "Loading…" : "More Jobs"}
          </Button>
        </div>
      )}
    </>
  );
};

export default ListJob;
