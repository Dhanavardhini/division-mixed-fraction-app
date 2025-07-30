
import React, { useState } from "react";
import QuestionStep from "./components/QuestionStep";
import RemainderStep from "./components/RemainderStep";
import SimplifyStep from "./components/SimplifyStep";
import Feedback from "./components/Feedback";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [quotient, setQuotient] = useState(0);
  const [feedback, setFeedback] = useState("");

  const remainder = 13 - quotient * 5;

  const goNextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="app">
      <div className="progress">Step {step} of 3</div>
      <h1>🍎 Division of 13 by 5</h1>
      <div className="app1">
        {step === 1 && (
          <QuestionStep
            setQuotient={setQuotient}
            setFeedback={setFeedback}
            goNext={goNextStep}
          />
        )}
        {step === 2 && (
          <RemainderStep quotient={quotient} remainder={remainder} goNext={goNextStep} />
        )}
        {step === 3 && (
          <SimplifyStep quotient={quotient} remainder={remainder} />
        )}

        {feedback && <Feedback message={feedback} />}
      </div>
    </div>
  );
}
