import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { StatusContainer, ChartsContainer } from "../components";


const Stats = () => {
  const { data } = useFetch("/jobs/stats");
  const jobstats = data?.defalutstats;
  const monthstats = data?.monthlystats;
  return (
    <div>
      <div>
        <StatusContainer data={jobstats} />
        {monthstats?.length > 1 && <ChartsContainer data={monthstats} />}
      </div>
    </div>
  );
};

export default Stats;
