/** Exercise 1.6 - 1.14 */
import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

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
    setAvg(avg.toFixed(1));
  };

  const calculatePct = (good, bad, neutral) => {
    let updatedTotal = good + bad + neutral;
    const positive = (good / updatedTotal) * 100;
    setPositivePct(positive.toFixed(1));
  };

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const min = 0;
  const max = Math.floor(anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));

  const handleAnecdotes = () => {
    let target = Math.floor(Math.random() * (max - min) + min);
    console.log(target);
    setSelected(target);
  };

  const handleVotes = () => {
    let copy = [...votes];
    copy[selected] += 1;
    setVotes([...copy]);
  };

  console.log(votes);
  return (
    <main>
      <h2>Give feedback | Exercises 1.6 - 1.11 </h2>
      <div className="feedback-actions">
        <Button onClick={() => handleCount("good")} label="good" />
        <Button onClick={() => handleCount("neutral")} label="neutral" />
        <Button onClick={() => handleCount("bad")} label="bad" />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avg={avg}
        positivePct={positivePct}
      />

      <hr />
      <h2> Anecdotes | Exercise 1.12 </h2>
      <div>
        <p>
          {anecdotes[selected]} <br />
          <em>{votes[selected]} votes</em>
        </p>
      </div>
      <div className="anecdotes-actions">
        <button onClick={handleVotes}>Vote</button>
        <button onClick={handleAnecdotes}>Show next</button>
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
