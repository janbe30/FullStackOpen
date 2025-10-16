import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      {props.total === 0 ? (
        <p> No feedback given yet! </p>
      ) : (
        <div className="stats">
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="badd" value={props.bad} />
          <StatisticLine text="total" value={props.total} />
          <StatisticLine text="avg" value={props.avg} />
          <StatisticLine text="positivePct" value={props.positivePct} />
        </div>
      )}
    </>
  );
};

export default Statistics;
