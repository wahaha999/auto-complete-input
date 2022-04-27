import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIndustries } from "../../store/industries/selectors";
import { getIndustries } from "../../store/industries";
import { Data } from "../types/data";
import AutoCompleteInput from "./AutoCompletInput";
import * as Style from "./styles";

const Container = () => {
  const [value, setValue] = useState<number>(-1);
  const [filterValue, setFilterValue] = useState<string>("");
  const [exactMatch, setExtractMatch] = useState<boolean>(true);

  const dispatch = useDispatch();
  const data = useSelector(getAllIndustries);

  const getDataSource = useCallback(
    (fValue: string): Array<Data> => {
      const formatedData = data.map((d) => {
        return { id: d.value, label: d.label };
      });

      return formatedData.filter((d) => d.label.includes(fValue));
    },
    [data]
  );

  const onChange = (selectedItem: Data) => {
    setValue(selectedItem.id);
    setFilterValue(selectedItem.label);

    const data = getDataSource(selectedItem.label);

    if (data.length === 0) setExtractMatch(false);
  };

  const onFilterValueChange = (e: any) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getIndustries());
  }, [dispatch]);

  return (
    <Style.Container>
      <Style.ContainerBody>
        <AutoCompleteInput
          label="Industry"
          placeholder="enter industry"
          getDataSource={getDataSource}
          filterValue={filterValue}
          value={value}
          exactMatch={exactMatch}
          onChange={onChange}
          onFilterValueChange={onFilterValueChange}
        />
      </Style.ContainerBody>
    </Style.Container>
  );
};

export default Container;
