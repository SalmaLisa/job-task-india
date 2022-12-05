import React from 'react';

const Categories = () => {
  return (
    <div className='w-8/12 space-x-4 space-y-8 mx-auto '>
      <span className='px-12 py-2 border border-gray-800 rounded-lg '>Fruits</span>
      <span className='px-12 py-2 border border-gray-800 rounded-lg '>Pulses</span>
      <span className='px-12 py-2 border border-gray-800 rounded-lg '>Vegetables</span>
      <span className='px-12 py-2 border border-gray-800 rounded-lg '>Flour</span>
      <span className='px-12 py-2 border border-gray-800 rounded-lg '>Dry Fruits</span><br />
     <p className='space-x-4'> <span className='px-12 py-2 border border-gray-800 rounded-lg '>Oils and Ghee</span>
      <span className='px-12 py-2 border border-gray-800 rounded-lg '>Salt, Sugar & Jaggery</span>
     </p>
    </div>
  );
};

export default Categories;