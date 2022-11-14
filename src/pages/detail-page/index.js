import React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";
import DetailPage from "./DetailPage";

import {
  getDetailAction,
  setDetailIdleAction,
} from "../../redux/github-jobs/action";

export const Detail = ({ detail, ...props }) => {
  const location = useLocation();
  const { jobId = "" } = useParams();
  const id = location.state?.id;
  return id === jobId ? (
    <DetailPage data={detail.data} id={id} {...props} />
  ) : (
    <Navigate to="/" />
  );
};

const mapStateToProps = ({ githubJobs }) => ({
  detail: githubJobs.detail,
});

const mapDispatchToProps = { getDetailAction, setDetailIdleAction };

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
