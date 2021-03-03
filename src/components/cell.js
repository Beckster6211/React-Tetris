import React from "react";
import { StyledCell } from "./styles/styledCell";
import { TETROMINOS } from "../tetrominos";

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log("rerender cell")}
  </StyledCell>
);

export default React.memo(Cell);

//from his github worked with mine had to change the word TETROMINOS
// import React from "react";
// import { StyledCell } from "./styles/styledCell";
// import { TETROMINOS } from "../tetrominos";

// // React.memo makes sure we only re-render the changed cells
// const Cell = ({ type }) => (
//   <StyledCell type={type} color={TETROMINOS[type].color}>
//     {console.log("rerender cell")}
//   </StyledCell>
// );

// export default React.memo(Cell);
