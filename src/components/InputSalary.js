import { React } from "react";

import NumberFormat from "react-number-format";


const InputSalary = ({ salary }) => {
  console.log("desde el input salary");
  console.log(salary.map(dato=>dato.quantity)[0]);
  console.log(salary.map(dato=>dato.quantity))

  return (
    <NumberFormat
      value={salary.map(dato=>dato.quantity)[0]}
      thousandSeparator={true}
      disabled="true"
    />
  );
};

export default InputSalary;
