import React from 'react'
import FormInputSelect from "./FormInputSelect";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constants";

const SelectInput = () => {
  return (
    <div className="lg:flex justify-around mt-4">
      <div className="lg:w-[25%]">
        <FormInputSelect
          labelText="Job Status"
          name="jobStatus"
          defaultvalue="all"
          list={["all", ...Object.values(JOB_STATUS)]}
        />
      </div>
      <div className="lg:w-[25%]">
        <FormInputSelect
          labelText="Job Type"
          name="jobType"
          defaultvalue="all"
          list={["all", ...Object.values(JOB_TYPE)]}
        />
      </div>
      <div className="lg:w-[25%]">
        <FormInputSelect
          name="sort"
          defaultvalue="all"
          list={[...Object.values(JOB_SORT_BY)]}
        />
      </div>
    </div>
  );
}

export default SelectInput