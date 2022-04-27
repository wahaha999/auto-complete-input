import { RootState } from "./types";

export const getIsFetching = (state: RootState) => state.industries.isFetching;
export const getIsError = (state: RootState) => state.industries.isError;
export const getAllIndustries = (state: RootState) =>
  state.industries.industries;
