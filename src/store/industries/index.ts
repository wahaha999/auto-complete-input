import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData } from "./actions";
import { Industry, Slice } from "./types";
import { Thunk } from "./types";

export const initialState: Slice = {
  industries: [],
  isFetching: false,
  isError: false,
};

const slice = createSlice({
  name: "industries",
  initialState,
  reducers: {
    request(state: any) {
      state.isFetching = true;
    },
    success(state: any, action: PayloadAction<Industry[]>) {
      state.isFetching = false;
      state.isError = false;
      state.industries = action.payload;
    },
    failure(state: any) {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { reducer } = slice;

export const { request, success, failure } = slice.actions;

export const getIndustries = (): Thunk => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(request());
    try {
      let { data } = await getData();

      dispatch(success(data.payload.industries));
    } catch (e) {
      dispatch(failure());
    }
  };
};
