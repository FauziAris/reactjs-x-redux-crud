import { call, put, takeLatest } from "redux-saga/effects";
import * as CONST from "./constants";
import * as action from "./action";
import * as API from "../../apis/githubJobsAPI";

function* getList({ payload }) {
  try {
    yield put(action.setListLoadingAction());
    const response = yield call(API.getList, payload);
    let data = Array.isArray(response.data) ? response.data : [];
    let hasMore = true;
    if (data.includes(null)) {
      hasMore = false;
      data = data.filter((item) => item !== null);
    }
    if (payload?.full_time !== true) {
      data = data.filter((item) => item?.type !== "Full Time");
    }

    yield put(
      action.getListSuccessAction({
        data: data,
        loadMore: hasMore,
        isFilter: payload.isFilter,
      })
    );
  } catch (error) {
    yield put(action.getListFailedAction(error.message));
  } finally {
    yield put(action.setListLoadingAction(false));
  }
}

function* getDetail({ payload }) {
  try {
    yield put(action.setDetailLoadingAction());
    const response = yield call(API.getDetail, payload);
    console.info(response);
    // let data = Array.isArray(response.data) ? response.data : [];
    // let hasMore = true;
    // if (data.includes(null)) {
    //   hasMore = false;
    //   data = data.filter((item) => item !== null);
    // }
    // if (payload?.full_time !== true) {
    //   data = data.filter((item) => item?.type !== "Full Time");
    // }

    // yield put(
    //   action.getDetailSuccessAction({
    //     data: data,
    //     loadMore: hasMore,
    //     isFilter: payload.isFilter,
    //   })
    // );
  } catch (error) {
    yield put(action.getDetailFailedAction(error.message));
  } finally {
    yield put(action.setDetailLoadingAction(false));
  }
}

const sagas = [
  takeLatest(CONST.GET_LIST, getList),
  takeLatest(CONST.GET_DETAIL, getDetail),
];

export default sagas;
