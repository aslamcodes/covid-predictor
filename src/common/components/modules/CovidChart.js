import React from "react";
import { useCovidStateHistory } from "../../hooks/useCovidStateHistory";

export const CovidChart = () => {
  const { data } = useCovidStateHistory();
  console.log(data);
  return <div></div>;
};
