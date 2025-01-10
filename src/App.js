import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import Filter from './Components/Filter';
import { filterData, apiUrl } from './data';


const App = () => { 
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
      setLoading(false);
    }
    catch(error) {
        toast.error("Unable to fetch data form API");
    }
    
  }
  
//for call the fetch data use effect hook 
  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <div className="min-h-screen flex flex-col  bg-bgDark2">

        <Navbar/>

      <div className="bg-bgDark2">

      
          <Filter 
          filterData={filterData}
          // category={category}
            setCategory={setCategory}
          />
  
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center">

        {
        // (courses.length === 0 || Object.keys(courses).length === 0) ? 
        // (<div>No Courses Found</div>) : 
        (loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>))
        }

          {/* {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          } */}
        </div>
      </div>


    </div>
  );
};

export default App;