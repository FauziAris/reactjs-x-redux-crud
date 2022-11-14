import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FormFilter from "./FormFilter";
import { ListJob } from "./ListJob";

const ACTION = {
  LOAD_LIST: "LOAD_LIST",
  LOAD_MORE: "LOAD_MORE",
  SEARCH: "SEARCH",
};

export default function MainPage(props) {
  //state
  const { list } = props;
  // action
  const { getListAction, setListIdleAction } = props;

  const [action, setAction] = useState(ACTION.LOAD_LIST);
  const [filter, setFilter] = useState({ full_time: true });
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setAction(ACTION.LOAD_MORE);
    setPage(page + 1);
    getListAction({ page: page + 1, ...filter });
  };

  useEffect(() => {
    getListAction({ page, ...filter });
    return () => {
      setListIdleAction();
    };
  }, []);

  return (
    <Container>
      <div className="my-3">
        <FormFilter
          onFilter={(data) => {
            setAction(ACTION.LOAD_LIST);
            let temp = {};
            Object.entries(data).forEach(([key, value]) => {
              if (String(value).trim()) {
                temp[key] = value;
              }
            });
            setFilter(temp);
            setPage(1);
            getListAction({ page: 1, ...temp }, true);
          }}
        />
      </div>
      <div className="my-3">
        <ListJob
          data={list.data}
          hasMore={list.loadMore}
          onLoadMore={handleLoadMore}
          isLoading={list.isLoading && action === ACTION.LOAD_LIST}
          isLoadingMore={list.isLoading && action === ACTION.LOAD_MORE}
        />
      </div>
    </Container>
  );
}
