import React from "react";

const NumberCounter = ({ number, startFrom = 0, bold = true }) => {
  return bold ? (
    <strong
      className={`${bold ? "font-weight-bold " : ""}number`}
      data-number={number}
    >
      {startFrom}
    </strong>
  ) : (
    <span
      className={`${bold ? "font-weight-bold " : ""}number`}
      data-number={number}
    >
      {startFrom}
    </span>
  );
};

export default NumberCounter;
