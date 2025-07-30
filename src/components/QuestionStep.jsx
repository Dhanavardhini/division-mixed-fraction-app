

import React from "react";

export default function QuestionStep({ setQuotient, setFeedback, goNext }) {
  const handleAnswer = (choice) => {
    if (choice === 2) {
      setFeedback("Correct! Two full groups of 5 fit in 13.");
      setQuotient(2);
      setTimeout(() => {
        setFeedback("");
        goNext();
      }, 800);
    } else if (choice < 2) {
      setFeedback(" Too few. Try again.");
    } else {
      setFeedback(" Too many. 3 groups exceed 13.");
    }
  };

  return (
    <div className="screen">
      <p>How many full groups of 5 fit into 13?</p>
      <div className="items">
        {[...Array(13)].map((_, i) => (
          <span key={i} className="apple">🍎</span>
        ))}
      </div>
      <div>
        {[1, 2, 3].map((num) => (
          <button key={num} onClick={() => handleAnswer(num)}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
