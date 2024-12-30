import React from "react";
import CardAdmin from "./CardAdmin";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";

const StatsContainer = ({ data }) => {
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardAdmin
        title="pending-jobs"
        data={data?.pending}
        icon={
          <PendingActionsIcon
            sx={{
              fontSize: "50px",
              color: "#916d3d",
              backgroundColor: "rgb(208, 181, 145)",
              borderRadius: "4px",
            }}
          />
        }
        color="rgb(208, 181, 145)"
      />
      <CardAdmin
        title="interview-jobs"
        data={data?.interview}
        icon={
          <InterpreterModeIcon
            sx={{
              fontSize: "50px",
              color: "#32694b",
              backgroundColor: "rgb(46, 159, 122)",
              borderRadius: "4px",
            }}
          />
        }
        color="rgb(46, 159, 122)"
      />
      <CardAdmin
        title="declined-jobs"
        data={data?.declined}
        icon={
          <NoAccountsIcon
            sx={{
              fontSize: "50px",
              color: "#8b1111",
              backgroundColor: "rgb(214, 36, 36)",
              borderRadius: "4px",
            }}
          />
        }
        color="rgb(214, 36, 36)"
      />
    </div>
  );
};

export default StatsContainer;
