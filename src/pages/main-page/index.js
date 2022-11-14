import { connect } from "react-redux";
import MainPage from "./MainPage";
import {
  getListAction,
  setListIdleAction,
} from "../../redux/github-jobs/action";

const mapStateToProps = ({ githubJobs }) => ({
  list: githubJobs.list,
});

const mapDispatchToProps = { getListAction, setListIdleAction };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
