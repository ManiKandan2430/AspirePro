import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <>
      <h1 className="text-2xl mt-10"> Bar Chart</h1>

      <ResponsiveContainer className="mt-10" width="100%" height={400}>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 0, right: 20, bottom: 0, left: -20 }}
        >
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis allowDecimals={false} />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 40,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="count" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartComponent;
