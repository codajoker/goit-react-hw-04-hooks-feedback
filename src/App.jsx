import React, { useState } from 'react';
import {
  FeedbackOptions,
  Statistics,
  Section,
  Notification,
} from './components';
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onLeaveFeedback = e => {
    const name = e.target.innerText;
    if (name === Object.keys({ good }).toString()) {
      return setGood(prevState => prevState + 1);
    }
    if (name === Object.keys({ neutral }).toString()) {
      return setNeutral(prevState => prevState + 1);
    }
    if (name === Object.keys({ bad }).toString()) {
      return setBad(prevState => prevState + 1);
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    if (isNaN((good / countTotalFeedback()) * 100)) {
      return 0;
    } else {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    </>
  );
}

export default App;
