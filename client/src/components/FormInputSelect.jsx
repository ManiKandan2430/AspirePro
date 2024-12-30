import React from 'react'
import { Typography } from '@mui/material';

const FormInputSelect = ({ list, name, labelText, defaultvalue }) => {
  
  return (
    <div className="mt-4 lg:mt-0">
      <Typography
        variant="h6"
        textTransform="uppercase"
        sx={{ mb: "12px", color: "navy" }}
      >
        {labelText || name}
      </Typography>
      <select
        name={name}
        defaultValue={defaultvalue}
        className="select select-info w-full max-w-xs"
      >
        {list.map((itemValue) => (
          <option
            className="text-xs lg:text-sm"
            key={itemValue}
            value={itemValue}
          >
            {itemValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormInputSelect
