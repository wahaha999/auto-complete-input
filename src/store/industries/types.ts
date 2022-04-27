import { Dispatch } from "redux";
import { appReducer } from "../reducer";

export interface Industry {
  value: number;
  label: string;
}

export interface Slice {
  industries: Array<Industry>;
  isFetching: boolean;
  isError: boolean;
}

export type Thunk = (
  dispatch: Dispatch<any>,
  getState: () => RootState
) => Promise<any>;

export type RootState = ReturnType<typeof appReducer>;
