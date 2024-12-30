import React from 'react'
import { useRouteError,Link } from 'react-router-dom'
import img from '../assets/not_found.svg'

const Error = () => {
    const error = useRouteError()
    console.log(error)
    if(error.status==404){
        return (
          <div className=' flex justify-center items-center mt-24'>
            <div className="leading-8">
              <img src={img} width={500} height={500} alt="Error" />
              <h3 className='ml-36'>404 Page not found</h3>
              <p className='ml-12'>We can't seem to find the pag you're looking for</p>
              <Link className='ml-40 underline text-blue-600' to="/dashboard">Back to Home</Link>
            </div>
          </div>
        );
    }
  return (
    <div>
        <h3> oops! somthing Went Wrong</h3>
    </div>
  )
}

export default Error
