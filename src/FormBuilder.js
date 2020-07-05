import React, { useState } from "react";
import Input from "./Input";

export default function FormBuilder(props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validInputs, setValidInputs] = useState({});

  const onSubmit = () => {
    setIsSubmitted(true);
    // check in valid inputs if all the inputs are valid submit the form
    const canSubmit = Object.entries(validInputs).every(([k, v]) => v === true);
    console.log(canSubmit);
  };

  const setValid = input => {
    setValidInputs({
      ...validInputs,
      [input.name]: input.error.length === 0
    });
  };

  return (
    <div>
      {
          props.form.map(o => {
          	return <Input
							key={o.name}
							type={o.type}
							name={o.name}
							isRequired={o.isRequired}
							setValid={setValid}
							isSubmitted={isSubmitted}
              pattern={o.pattern}
              value={o.value}
              onChange={props.onChange}
						/>;
          })
      }
     
      <button onClick={onSubmit}>Submit</button>
    
    </div>
  );
}