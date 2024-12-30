import React, { useState } from "react";
import AreaChart from "./AreaChart";
import BarChartComponent from "./BarChartComponent";

const ChartsContainer = ({ data }) => {
  const [barchart, setBarchart] = useState(true);

  return (
    <div className="flex flex-col items-center mt-10 px-4 lg:px-10">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
          Monthly Application Status
        </h1>
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        className="text-violet-500 text-lg sm:text-xl lg:text-2xl underline mb-6"
        onClick={() => setBarchart(!barchart)}
      >
        {barchart ? "Switch to Area Chart" : "Switch to Bar Chart"}
      </button>

      {/* Chart Container */}
      <div className="w-full max-w-4xl">
        {barchart ? (
          <BarChartComponent data={data} />
        ) : (
          <AreaChart data={data} />
        )}
      </div>
    </div>
  );
};

export default ChartsContainer;
