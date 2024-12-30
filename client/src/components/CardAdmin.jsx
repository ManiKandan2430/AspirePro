import * as React from "react";
import Typography from "@mui/material/Typography";
import "../App.css";


const CardAdmin = ({ title, data,icon,color }) => {
  return (
    <div className="cards h-[150px] w-[300px]">
      <div>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "20px",
            position: "relative",
            top: "0px",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{marginLeft:"150px",marginTop:"-50px"}}>{icon}</Typography>
        <div
          style={{
            background: `conic-gradient(#4d78c3 ${data/100}%, #e2eaeb ${data}% 100%)`, // Fills based on value
            borderRadius: "50%", // Circle shape
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            marginLeft: "130px",
            marginTop: "5px",
            position: "relative",
            right: "53px",
          }}
        >
          <span className="text-xs">{data/100}%</span>
        </div>

        <Typography sx={{ fontSize: "30px" }}>
          <span className="text-xl lg:text-3xl relative top-[-45px]">
            {data}
          </span>
        </Typography>
        <div
          style={{ border: `3px solid ${color}`, borderBottom: { color } }}
          className="px-[147px] relative -top-7 -ml-[35px]"
        ></div>
      </div>
    </div>
  );
};
export default CardAdmin;
