
import { useState, useEffect } from 'react';
import './App.css'
import { Description } from '../Description/Description'
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options'




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

export const clearLocalStorage = () => {
  localStorage.removeItem('feedbackState');
};

export const App = () => {

  const [feedbackState, setFeedbackState] = useState(initializeState());

  useEffect(() => {
    localStorage.setItem('feedbackState', JSON.stringify(feedbackState));
  }, [feedbackState]);

  const totalFeedback = feedbackState.good + feedbackState.neutral + feedbackState.bad;
  const positivePercentage = Math.round((feedbackState.good + feedbackState.neutral) / totalFeedback * 100);


  return (
    <>
      <Description title="Sip Happens Café" description="Please leave your feedback about our service by selecting one of the options below."/>
      
      <Options setFeedbackState={setFeedbackState} />

      <Feedback
        good={feedbackState.good}
        neutral={feedbackState.neutral}
        bad={feedbackState.bad}
        positivePercentage={positivePercentage}
        totalFeedback={totalFeedback}
      />
    
    </>
    
  );
};
