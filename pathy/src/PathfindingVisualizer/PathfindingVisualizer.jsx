import Node from "./Node/Node";
import { useEffect, useState } from "react";

import "./PathfindingVisualizer.css";

const PathfindingVisualizer = () => {
  const [nodes, setNodes] = useState([]);

  const nodeCreation = () => {
    const nodes = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          col,
          row,
          isStart: row === 10 && col === 5,
          isFinish: row === 10 && col === 45,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    setNodes(nodes);
  };

  useEffect(nodeCreation, []);

  return (
    <div className="grid">
      {nodes.map((row, rowIdx) => {
        return (
          <div key={rowIdx}>
            {row.map((node, nodeIdx) => {
              const { isStart, isFinish } = node;
              return (
                <Node key={nodeIdx} isStart={isStart} isFinish={isFinish} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PathfindingVisualizer;
