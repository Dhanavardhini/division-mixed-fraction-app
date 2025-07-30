

import React from "react";

export default function RemainderStep({ quotient, remainder, goNext }) {
  return (
    <div className="screen">
      <p>You made <strong>{quotient}</strong> full groups of 5.</p>
      <p>Remaining: <strong>{remainder}</strong> apples  parts.</p>
      <button onClick={goNext}>Show Final Answer</button>
    </div>
  );
}
