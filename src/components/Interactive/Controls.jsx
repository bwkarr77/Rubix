import React from "react";
import { Button } from "semantic-ui-react";
// import "../scss/controls.scss";

const Controls = () => {
  return (
    <div className="controls">
      Controls
      <ul className="buttons">
        <li>
          <Button content="Bottom Clockwise" />
        </li>
        <li>
          <Button content="Bottom Counter-Clockwise" />
        </li>
        <li>
          <Button content="Top Clockwise" />
        </li>
        <li>
          <Button content="Top Counter-Clockwise" />
        </li>
        <li>
          <Button content="Mid Clockwise" />
        </li>
        <li>
          <Button content="Mid Counter-Clockwise" />
        </li>
        <li>
          <Button content="Front Clockwise" />
        </li>
        <li>
          <Button content="Front Counter-Clockwise" />
        </li>
        <li>
          <Button content="Side Counter-Clockwise" />
        </li>
        <li>
          <Button content="Side Clockwise" />
        </li>
      </ul>
    </div>
  );
};

export default Controls;
