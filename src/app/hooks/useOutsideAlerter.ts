import React, { useEffect } from "react";

export const useOutsideAlerter = (
  ref: React.MutableRefObject<HTMLDivElement & HTMLUListElement>,
  callback: (isClick: boolean) => void
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
