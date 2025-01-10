import React from 'react';
import Card from './Card';

const Cards = ({ courses, category }) => {

  console.log(courses);

  function getCourses() {
    if(category === "All") {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    else {
        //main sirf specific categiry ka data array krunga  
        return courses[category];      
    }

}
  
  

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap gap-4 justify-center">
      {getCourses(courses).map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Cards;
