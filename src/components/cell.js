import React from "react";
import { StyledCell } from "./styles/styledCell";
import { TETROSMINOS } from "../tetrominos";

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROSMINOS[type].color}>
    {console.log("rerender cell")}
  </StyledCell>
);

export default React.memo(Cell);
