import { useState, useEffect } from "react";

const Anecdotes = () => {
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
  const [topVotes, setTopVotes] = useState(-1);

  const handleAnecdotes = () => {
    let target = Math.floor(Math.random() * (max - min) + min);
    setSelected(target);
  };

  const handleVotes = () => {
    let copy = [...votes];
    copy[selected] += 1;
    setVotes([...copy]);
    setTopVotes(findHighestVotes(copy));
  };

  const findHighestVotes = (arr) => {
    if (topVotes < 0) return 0;
    let highestVal = votes[topVotes];
    let topIdx = topVotes;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > highestVal) {
        topIdx = i;
      }
    }
    return topIdx;
  };

  return (
    <>
      <h2> Anecdotes | Exercise 1.12 - 1.14 </h2>
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
      <div>
        <h3>Most votes</h3>
        {topVotes < 0 ? (
          "No votes yet!"
        ) : (
          <p>
            {anecdotes[topVotes]} <br />
            <em>{votes[topVotes]} votes</em>
          </p>
        )}
      </div>
    </>
  );
};

export default Anecdotes;
