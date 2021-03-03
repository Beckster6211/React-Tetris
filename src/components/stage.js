import React from "react";

import { StyledStage } from "./styles/styledStage";

import Cell from "./cell";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;

//from his github worked with mine
// import React from "react";
// import { StyledStage } from "./styles/styledStage";

// import Cell from "./cell";

// const Stage = ({ stage }) => (
//   <StyledStage width={stage[0].length} height={stage.length}>
//     {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
//   </StyledStage>
// );

// export default Stage;
