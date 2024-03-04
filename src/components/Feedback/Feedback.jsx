

export const Feedback = ({ good, neutral, bad, totalFeedback, positivePercentage}) => {

    
    return (
      <div>

        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positivePercentage}%</li>
        </ul>
        
      </div>
    );
  }