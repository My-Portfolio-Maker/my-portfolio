import React from "react";

const NumberCounter = ({ number, startFrom = 0, bold = true }) => {
  return isNaN(number) ? (
    <strong className={`${bold ? "font-weight-bold " : ""}number`}>
      {number}
    </strong>
  ) : (
    <strong
      className={`${bold ? "font-weight-bold " : ""}number`}
      data-number={number}
    >
      {startFrom}
    </strong>
  );
};

export default NumberCounter;
