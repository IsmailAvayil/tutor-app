import { useEffect } from "react";

export const useOutsideClick = ({ ref, callback, excludedRef }) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !(excludedRef && excludedRef.current?.contains(event.target))
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, excludedRef]);
};
