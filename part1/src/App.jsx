/** Exercise 1.6 - 1.14 */
import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [avg, setAvg] = useState(null);
  const [positivePct, setPositivePct] = useState(0);

  const handleCount = (type) => {
    let updatedGood = good,
      updatedBad = bad,
      updatedNeutral = neutral;
    if (type === "good") {
      setGood(good + 1);
      updatedGood = good + 1;
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
      updatedNeutral = neutral + 1;
    } else {
      setBad(bad + 1);
      updatedBad = bad + 1;
    }
    setTotal(updatedGood + updatedBad + updatedNeutral);
    calculateAvg(updatedGood, updatedBad, updatedNeutral);
    calculatePct(updatedGood, updatedBad, updatedNeutral);
  };

  const calculateAvg = (good, bad, neutral) => {
    let updatedTotal = good + bad + neutral;
    const avg = (good - bad) / updatedTotal;
    setAvg(avg);
  };

  const calculatePct = (good, bad, neutral) => {
    let updatedTotal = good + bad + neutral;
    const positive = (good / updatedTotal) * 100;
    setPositivePct(positive);
  };

  return (
    <main>
      <h1>Give feedback</h1>
      <div className="feedback-actions">
        <button onClick={() => handleCount("good")}>good</button>
        <button onClick={() => handleCount("neutral")}>neutral</button>
        <button onClick={() => handleCount("bad")}>bad</button>
      </div>
      <h2>Statistics</h2>
      <div className="stats">
        <ul>
          <li>good: {good}</li>
          <li>neutral: {neutral}</li>
          <li>bad: {bad}</li>
          <li>total: {total}</li>
          <li>average: {avg}</li>
          <li>positive: {positivePct}%</li>
        </ul>
      </div>
    </main>
  );
};

export default App;

/** Exercises 1.1 - 1.5
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
 */
