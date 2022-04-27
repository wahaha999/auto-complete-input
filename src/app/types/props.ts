import { Data } from "./data";

export type buttonProps = {
  left: number;
  right: number;
  active: boolean;
};

export type Props = {
  label: string;
  placeholder: string;
  getDataSource: (value: string) => Array<Data>;
  value: number;
  filterValue: string;
  exactMatch: boolean;
  onChange: (item: Data) => void;
  onFilterValueChange: (e: any) => void;
};
