import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import Filter from './Components/Filter';
import  { filterData, apiUrl } from './data';
const App = () => {
 
    // use state hook ka use kro 
    const [courses, setCourses] = useState();

    return (
    <div className="wrapper w-full  flex flex-col flex-wrap overflow-hidden">
        
        <Navbar>  </Navbar>
        <div className="container h-screen w-full  bg-bgDark2 flex flex-col">
             <Filter filterData = {filterData}> </Filter>
             <Cards courses = {courses}> </Cards>
        </div>
        
    </div>
  )
}

export default App;