import React, { useState } from 'react';
import './App.css';
import FormBuilder from './FormBuilder';


function App() {
  const [ values, setValues ] = useState({
    name: "",
    email: "",
    password: "",
    age: 0
  });

  function onChange(v) {
    setValues(pv => ({...pv, ...v}))
  }

  return (
    <FormBuilder onChange={onChange} form={[
      {
        isRequired: true,
        type: "text",
        name: "name",
        placeholder: "Name",
        value: values.name
      },
      {
        isRequired: true,
        type: "email",
        name: "email",
        placeholder: "Email",
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        value: values.email,
      },
      {
        isRequired: true,
        type: "password",
        name: "password",
        placeholder: "Password",
        pattern: "",
        value: values.password
      },
      {
        isRequired: true,
        type: "number",
        name: "age",
        placeholder: "Age",
        pattern: "",
        value: values.age
      }
    ]} />
  );
}

export default App;
