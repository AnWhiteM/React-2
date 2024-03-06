export const Options = ({ handleFeedbackUpdate, handleResetClick, feedbackState }) => {

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => handleFeedbackUpdate('good')}>Good</button>
        </li>
        <li>
          <button onClick={() => handleFeedbackUpdate('neutral')}>Neutral</button>
        </li>
        <li>
          <button onClick={() => handleFeedbackUpdate('bad')}>Bad</button>
        </li>
        {feedbackState.good > 0 || feedbackState.neutral > 0 || feedbackState.bad > 0 ? (
          <li>
            <button onClick={handleResetClick}>Reset</button>
          </li>
        ) : null}
      </ul>
    </div>
  );
};