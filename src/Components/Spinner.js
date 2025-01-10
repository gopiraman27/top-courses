import React from 'react'
import './Spiner.css';
const Spinner = () => {
  return (
    <div className="flex  flex-col justify-center items-center">
      <h1 className='text-white font-bold text-xl'>Loading...</h1>
      <div className='loader'></div>
    </div>
  )
}

export default Spinner
