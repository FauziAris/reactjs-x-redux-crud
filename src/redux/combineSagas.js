import { all } from "redux-saga/effects";

import githubJobsSagas from "./github-jobs/sagas";

export default function* bootstrapSagas() {
  yield all([...githubJobsSagas]);
}
