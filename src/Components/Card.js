import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

const Card = ({ course, likedCourses,setLikedCourses }) => {
  const [readmore, setReadmore] = useState(false);
  const [likedCourse, setLikedcourse] = useState(false);

  function readmoreHandler(){
    setReadmore(!readmore);
  }
  // 
  function clickHandler() {
    //logic
    if(likedCourses.includes(course.id)) {
        //pehle se like hua pada tha
        setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
        toast.warning("like removed");
    }
    else {
        //pehle se like nahi hai ye course
        //insert karna h ye course liked courses me 
        if(likedCourses.length === 0 ) {
            setLikedCourses([course.id]);
        }
        else {
            //non-empty pehle se
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
    }
}

  return (
    <div className="w-[300px]  bg-bgDark bg-opacity-80 rounded-md overflow-hidden relative">
      <img
        src={course.image.url}
        alt={course.image.alt} className="w-full h-auto rounded-md ">
        
      </img>

      {/*  */}
      <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-[151px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
        </div>
    
      
     
      <h2 className="text-xl text-white font-bold px-4 py-4  h-[60px]">{course.title}</h2>
      
      <p className="text-white px-4 py-4">
        {readmore ? course.description : `${course.description.substring(0, 80)}...`}
        <span>
          <button
            className="text-white px-4  underline"
            onClick={readmoreHandler} >
            {readmore ? "Show Less" : "Read More"}
          </button>
      </span>
      </p>
      <ToastContainer/>
      
    </div>
  );
};

export default Card;
