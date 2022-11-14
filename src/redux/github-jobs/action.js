import * as CONST from "./constants";
import { listState, detailState } from "./states";

export const setListIdleAction = (payload = listState) => ({
  type: CONST.SET_LIST_IDLE,
  payload,
});

export const setListLoadingAction = (payload = true) => ({
  type: CONST.SET_LIST_LOADING,
  payload,
});

export const getListAction = (payload = {}, isFilter = false) => ({
  type: CONST.GET_LIST,
  payload: { ...payload, isFilter },
});

export const getListSuccessAction = (payload) => ({
  type: CONST.GET_LIST_SUCCESS,
  payload,
});

export const getListFailedAction = (payload = "There is something wrong") => ({
  type: CONST.GET_LIST_FAILED,
  payload,
});

// detail
export const setDetailIdleAction = (payload = detailState) => ({
  type: CONST.SET_LIST_IDLE,
  payload,
});

export const setDetailLoadingAction = (payload = true) => ({
  type: CONST.SET_LIST_LOADING,
  payload,
});

export const getDetailAction = (payload = {}) => ({
  type: CONST.GET_LIST,
  payload,
});

export const getDetailSuccessAction = (payload) => ({
  type: CONST.GET_LIST_SUCCESS,
  payload,
});

export const getDetailFailedAction = (
  payload = "There is something wrong"
) => ({
  type: CONST.GET_LIST_FAILED,
  payload,
});
