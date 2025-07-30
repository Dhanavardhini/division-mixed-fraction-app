


import React, { useEffect } from "react";
import confetti from "canvas-confetti";

export default function SimplifyStep({ quotient, remainder }) {
  useEffect(() => {
    confetti();
  }, []);

  return (
    <div className="screen">
      <h2>🎉 Final Answer: {quotient} {remainder}/5</h2>
      <p>We have {quotient} wholes and {remainder} parts of 5.</p>
      <p>13 ÷ 5 = <strong>{quotient} {remainder}/5</strong></p>
    </div>
  );
}
