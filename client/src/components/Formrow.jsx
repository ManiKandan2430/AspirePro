import React from "react";
import {TextField, Box } from "@mui/material";
const Formrow = ({ type, name, labelText, defaultvalue}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        id="outlined-textarea"
        type={type}
        label={labelText}
        name={name}
        defaultValue={defaultvalue}
        multiline
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default Formrow;
