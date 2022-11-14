import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function DetailPage(props) {
  const { data, id, getDetailAction, setDetailIdleAction } = props;
  const navigate = useNavigate();
  return (
    <Container className="my-3">
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
      <Card className="my-3">
        <Card.Header className="bg-white">
          <h2>Job Detail</h2>
        </Card.Header>
        <Card.Body className="p-0"></Card.Body>
      </Card>
    </Container>
  );
}
