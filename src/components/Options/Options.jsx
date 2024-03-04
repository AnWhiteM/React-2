import { useState } from 'react';
import { clearLocalStorage } from '../App/App';

export const Options = ({ setFeedbackState }) => {
  const setTotalFeedback = useState(0);

  const handleGoodClick = () => {
    setFeedbackState((prevState) => ({
      ...prevState,
      good: prevState.good + 1,
    }));
    setTotalFeedback((prevTotal) => prevTotal + 1);
  };

  const handleNeutralClick = () => {
    setFeedbackState((prevState) => ({
      ...prevState,
      neutral: prevState.neutral + 1,
    }));
    setTotalFeedback((prevTotal) => prevTotal + 1);
  };

  const handleBadClick = () => {
    setFeedbackState((prevState) => ({
      ...prevState,
      bad: prevState.bad + 1,
    }));
    setTotalFeedback((prevTotal) => prevTotal + 1);
  };

  const handleResetClick = () => {
    setFeedbackState({ good: 0, neutral: 0, bad: 0 });
  setTotalFeedback(0);
  clearLocalStorage();
  };


  return (
    <div>
      <ul>
        <li>
          <button onClick={handleGoodClick}>Good</button>
        </li>
        <li>
          <button onClick={handleNeutralClick}>Neutral</button>
        </li>
        <li>
          <button onClick={handleBadClick}>Bad</button>
        </li>
        <li>
          <button onClick={handleResetClick}>Reset</button>
        </li>
      </ul>
    </div>
  );
};