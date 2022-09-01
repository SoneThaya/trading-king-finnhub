import React from "react";
import AutoComplete from "../components/AutoComplete";
import StockList from "../components/StockList";

const StockOverviewPage = () => {
  return (
    <div className="container">
      <AutoComplete />
      <StockList />
    </div>
  );
};

export default StockOverviewPage;
