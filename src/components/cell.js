import React from "react";
import { StyledCell } from "./styles/styledCell";
import { TETROSMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROSMINOS[type].color}>
    {console.log("rerender")}
  </StyledCell>
);

export default React.memo(Cell);
