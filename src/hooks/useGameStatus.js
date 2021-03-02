import React, { useState, useEffect, useCallback } from "react";

export const useGamesStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  //original tetris points 1 line cleared 2, 3, 4 lines cleared
  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    //we have a score
    if (rowsCleared > 0) {
      setScore((prev) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
