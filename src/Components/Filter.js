import React from 'react';

const Filter = ({ filterData }) => {
  return (
    <div className="w-11/12 max-w-max flex flex-wrap mx-auto py-4 space-x-4 justify-center">
      {filterData.map((data) => (
        <button 
          key={data.id} 
          className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 hover:border-white border-2 bg-opacity-40 border-transparent transition-all duration-300">
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
