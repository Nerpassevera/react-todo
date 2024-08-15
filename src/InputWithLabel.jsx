/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

export default function InputWithLabel({ Children, placeholder }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoTitle">{Children}</label>
      <input ref={inputRef} id="todoTitle" placeholder={placeholder} />
    </>
  );
}
