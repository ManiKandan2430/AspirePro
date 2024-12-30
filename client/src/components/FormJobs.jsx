import React, { useContext } from "react";
import { FormInputSelect, Formrow } from "../components";
import { Button, Typography } from "@mui/material";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants.js";

const FormJobs = ({
  defaultvalue,
  labelText,
  company,
  position,
  jobStatus,
  jobType,
}) => {
  return (
    <div className="py-10 px-4 border-2 shadow-lg">
      <Typography textTransform="uppercase" variant="h5" sx={{ color: "navy" }}>
        {labelText}
      </Typography>
      <div className="mt-4 w-full lg:grid grid-cols-2 gap-4">
        <Formrow
          type="text"
          labelText="company"
          name="company"
          defaultvalue={company}
        />
        <Formrow
          type="text"
          labelText="position"
          name="position"
          defaultvalue={position}
        />
        <Formrow type="text" labelText="Location" name="jobLocation" defaultvalue={defaultvalue} />
      </div>
      <div className="lg:flex gap-28 lg:w-auto mt-5">
        <div>
          <FormInputSelect
            labelText="jobStatus"
            name="jobStatus"
            defaultvalue={jobStatus ? jobStatus : JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
        </div>
        <div>
          <FormInputSelect
            labelText="jobType"
            name="jobType"
            defaultvalue={jobType ? jobType : JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
        </div>
      </div>
      <div className="ml-20 lg:ml-64">
        <Button
          sx={{
            bgcolor: "#1976d2",
            color: "white",
            marginTop: "50px",
            px: "40px",
          }}
          type="sumbit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FormJobs;
