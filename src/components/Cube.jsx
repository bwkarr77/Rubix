import React from "react";
import Controls from "./Interactive/Controls.jsx";
import Display from "./Interactive/Display.jsx";
import "./scss/cube.scss";

const Cube = () => {
  return (
    <div className="cube">
      <h3>Cube</h3>
      <div className="game">
        <Controls />
        <Display />
      </div>
    </div>
  );
};

export default Cube;
