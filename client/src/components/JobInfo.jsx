import { Box, Typography } from '@mui/material'
import React from 'react'

const JobInfo = ({icon,text}) => {
  return (
    <div className="text-sm space-x-2 my-2">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default JobInfo
