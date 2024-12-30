import React from 'react'
import Job from './Job';

const JobContainer = ({ data, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
      {data.map((job) => {
        return <Job key={job._id} {...job}/>
      })}
    </div>
  );
};

export default JobContainer
