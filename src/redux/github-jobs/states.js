const indicator = {
  isLoading: false,
  isSuccess: false,
  isFailed: false,
  message: "",
};

export const listState = {
  ...indicator,
  data: [],
  loadMore: false,
};
export const detailState = {
  ...indicator,
  data: {},
};

export const initialState = { list: listState, detail: detailState };
