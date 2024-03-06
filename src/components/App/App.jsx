import { useState, useEffect } from 'react';
import './App.css'
import { Description } from '../Description/Description'
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options'
import { Notification } from '../Notification/Notification';




export const initializeState = () => {
  const storedState = localStorage.getItem('feedbackState');

  if (storedState) {
    return JSON.parse(storedState);
  }

  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export const App = () => {
  const [feedbackState, setFeedbackState] = useState(initializeState);

  useEffect(() => {
    localStorage.setItem('feedbackState', JSON.stringify(feedbackState));
  }, [feedbackState]);

  const handleFeedbackUpdate = (type) => {
    setFeedbackState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };

  const handleResetClick = () => {
    setFeedbackState({ good: 0, neutral: 0, bad: 0 });
    
  };

  const totalFeedback = feedbackState.good + feedbackState.neutral + feedbackState.bad;
  const positivePercentage = Math.round((feedbackState.good + feedbackState.neutral) / totalFeedback * 100);

  return (
    <>
      <Description title="Sip Happens Café" description="Please leave your feedback about our service by selecting one of the options below."/>
      
      <Options 
            handleFeedbackUpdate={handleFeedbackUpdate} 
            handleResetClick={handleResetClick} 
            feedbackState={feedbackState} 
          />
      {totalFeedback === 0 ? (
        <Notification notification= "No feedback yet" />
      ) : (
        <>
          
          <Feedback
            good={feedbackState.good}
            neutral={feedbackState.neutral}
            bad={feedbackState.bad}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </>
      )}
    
    </>
  );
};
