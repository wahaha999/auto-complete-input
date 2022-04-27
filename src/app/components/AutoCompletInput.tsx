import React, { FC, useEffect, useState, useCallback, useRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";
import { Data, Props } from "../types";
import * as Style from "./styles";

const AutoCompleteInput: FC<Props> = (props) => {
  const {
    label,
    placeholder,
    getDataSource,
    value,
    filterValue,
    exactMatch,
    onChange,
    onFilterValueChange,
  } = props;

  const [data, setData] = useState<Data[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const popeverRef = useRef() as React.MutableRefObject<
    HTMLDivElement & HTMLUListElement
  >;

  const handleChange = useCallback(
    (element: any) => {
      onFilterValueChange(element);

      const data = getDataSource(element.target.value);

      setData(data);

      if (data.length === 0) {
        setOpen(false);
      } else {
        setOpen(true);
        setTimeout(() => {
          inputRef.current.focus();
        }, 200);
      }
    },
    [getDataSource]
  );

  const handleKeydown = (e: any) => {
    if (e.key === "Enter") {
      if (data.length !== 0) {
        onChange(data[0]);
        setData(getDataSource(data[0].label));
        setOpen(false);
      }
    }
  };

  const handleTrigger = useCallback(
    (e: any) => {
      setOpen(!open);
    },
    [open]
  );

  const handleSelect = useCallback(
    (item: Data) => {
      onChange(item);
      setData(getDataSource(item.label));
      setOpen(false);
    },
    [onChange, getDataSource]
  );

  const handleOutClick = useCallback((isClick: boolean) => {
    setTimeout(() => {
      setOpen(!isClick);
    }, 100);
  }, []);

  useOutsideAlerter(popeverRef, handleOutClick);

  useEffect(() => {
    if (!exactMatch) onFilterValueChange(null);
  }, [exactMatch, onFilterValueChange]);

  return (
    <Popover.Root open={open}>
      <Style.Anchor>
        <Style.Label>{label}</Style.Label>
        <Style.InputContent ref={popeverRef}>
          <Style.Input
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDown={handleKeydown}
            value={filterValue}
            ref={inputRef}
          />
          <Style.Trigger onClick={handleTrigger}>
            <Style.Arrow src="/assets/icons/arrow-down.svg" />
          </Style.Trigger>
        </Style.InputContent>
      </Style.Anchor>
      <Style.Content>
        <Style.UList ref={popeverRef}>
          {data.map((d: Data, index: number) => {
            return (
              <Style.List onClick={() => handleSelect(d)} key={index}>
                {d.label}
              </Style.List>
            );
          })}
        </Style.UList>
      </Style.Content>
    </Popover.Root>
  );
};

export default AutoCompleteInput;
