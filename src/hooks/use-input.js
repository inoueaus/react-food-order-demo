import { useRef, useState } from "react";

const useInput = (validator) => {
  const ref = useRef("");
  const [isValid, setIsValid] = useState(true);

  const handleBlur = (e) => {
    setIsValid(validator(ref.current.value));
  };

  const reset = () => {
    setIsValid(true);
  };

  return {
    value: ref.current.value,
    ref,
    isValid,
    handleBlur,
    reset,
  };
};

export default useInput;
