import { useState } from "react";

const useInput = (validator) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validator(value);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = (e) => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched("");
  };

  return { value, touched, isValid, handleInput, handleBlur, reset };
};

export default useInput;
