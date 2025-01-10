import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';

const Card = ({ course }) => {
  const [readmore, setReadmore] = useState(false);

  function readmoreHandler(){
    setReadmore(!readmore);
  }

  return (
    <div className="w-[300px]  bg-bgDark bg-opacity-80 rounded-md overflow-hidden ">
      <img
        src={course.image.url}
        alt={course.image.alt}
        className="w-full h-auto rounded-md  relative"
      />
      
      <h2 className="text-xl text-white font-bold px-4 py-2 h-[60px]">{course.title}</h2>
      
      <p className="text-white px-4 py-2">
        {readmore ? course.description : `${course.description.substring(0, 150)}...`}
        <span>
          <button
            className="text-white px-4 py-2 underline"
            onClick={readmoreHandler} >
            {readmore ? "Show Less" : "Read More"}
          </button>
      </span>
      </p>
      
      
    </div>
  );
};

export default Card;
