import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      {props.total === 0 ? (
        <p> No feedback given yet! </p>
      ) : (
        <table className="stats">
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="total" value={props.total} />
            <StatisticLine text="average" value={props.avg} />
            <StatisticLine text="positive" value={props.positivePct} />
          </tbody>
        </table>
      )}
    </>
  );
};

export default Statistics;
