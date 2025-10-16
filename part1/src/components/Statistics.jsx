const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      {props.total === 0 ? (
        <p> No feedback given yet! </p>
      ) : (
        <div className="stats">
          <ul>
            <li>good: {props.good}</li>
            <li>neutral: {props.neutral}</li>
            <li>bad: {props.bad}</li>
            <li>total: {props.total}</li>
            <li>average: {props.avg}</li>
            <li>positive: {props.positivePct}%</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Statistics;
