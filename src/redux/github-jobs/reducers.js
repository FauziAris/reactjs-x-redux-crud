import * as CONST from "./constants";
import { initialState } from "./states";

const listReducer = (state = initialState, { payload }, setState) => {
  return {
    [CONST.SET_LIST_IDLE]: () => setState(payload),
    [CONST.GET_LIST]: () =>
      setState({
        list: {
          ...state.list,
          isSucces: false,
          isFailed: false,
        },
      }),
    [CONST.SET_LIST_LOADING]: () =>
      setState({
        list: {
          ...state.list,
          isLoading: payload,
        },
      }),
    [CONST.GET_LIST_FAILED]: () =>
      setState({
        list: {
          ...state.list,
          data: [],
          isFailed: true,
          loadMore: false,
          message: payload,
        },
      }),
    [CONST.GET_LIST_SUCCESS]: () =>
      setState({
        list: {
          ...state.list,
          isSuccess: true,
          data: payload.isFilter
            ? payload.data
            : [...state.list.data, ...payload.data],
          loadMore: payload.loadMore,
        },
      }),
  };
};

const detailReducer = (state = initialState, { payload }, setState) => {
  return {
    [CONST.SET_DETAIL_IDLE]: () => setState(payload),
    [CONST.GET_DETAIL]: () =>
      setState({
        detail: {
          ...state.detail,
          isSucces: false,
          isFailed: false,
        },
      }),
    [CONST.SET_DETAIL_LOADING]: () =>
      setState({
        detail: {
          ...state.detail,
          isLoading: payload,
        },
      }),
    [CONST.GET_DETAIL_FAILED]: () =>
      setState({
        detail: {
          ...state.detail,
          data: {},
          isFailed: true,
          message: payload,
        },
      }),
    [CONST.GET_DETAIL_SUCCESS]: () =>
      setState({
        detail: {
          ...state.list,
          isSuccess: true,
          data: payload.data,
        },
      }),
  };
};

export default function reducers(state = initialState, action) {
  const { type } = action;
  const setState = (newState) => ({
    ...state,
    ...newState,
  });

  const actions = {
    ...listReducer(state, action, setState),
    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
}
