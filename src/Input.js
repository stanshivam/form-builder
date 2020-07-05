import React, { useState, useEffect } from "react";

const Input = ({
  name,
  isSubmitted,
  isRequired,
  setFormValid,
  pattern,
  setValid,
  type,
  value,
  onChange,
  ...rest
}) => {
  const [error, setError] = useState([]);

  useEffect(() => {
    setValid({ name, error });
  }, [name, error]);

  useEffect(() => {
    const checkValid = () => {
      let newError = [];
      isRequired && !value && newError.push(`${name} is required`);
      pattern && !pattern.test(value) && newError.push(`${name} is invalid`);
      error.length !== newError.length && setError(newError);
    };

    checkValid();
  });

  const handleChange = (name) => ({ target: { value } }) => {
    onChange({[name]: value})
  };

  return (
    <div>
      <span>{name[0].toUpperCase() + name.substr(1)}</span>
      <input 
        type={type} 
        value={value} 
        name={name} 
        onChange={handleChange(name)}
        {...rest} 
      />
      {isSubmitted && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
};

export default Input;
