import "./Node.css";

const Node = (props) => {
  const { isFinish, isStart } = props;
  const extraClassName = isFinish ? "node-finish" : isStart ? "node-start" : "";
  return <div className={`node ${extraClassName}`}></div>;
};

export default Node;

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
