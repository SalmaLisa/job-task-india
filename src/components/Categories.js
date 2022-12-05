import React from 'react';

const Categories = () => {
  return (
    <div className='w-8/12 mx-auto mt-56'>
      <span className='px-12 py-2 mr-4 border border-gray-800 rounded-lg inline-block '>Fruits</span>
      <span className='px-12 py-2 mr-4 border border-gray-800 rounded-lg inline-block'>Pulses</span>
      <span className='px-12 py-2 mr-4 border border-gray-800 rounded-lg inline-block'>Vegetables</span>
      <span className='px-12 py-2 mr-4 border border-gray-800 rounded-lg inline-block'>Flour</span>
      <span className='px-12 py-2 mr-4 border border-gray-800 rounded-lg inline-block'>Dry Fruits</span><br />
     <p className='mt-4'> <span className='px-12 mr-4 py-2 border border-gray-800 rounded-lg inline-block'>Oils and Ghee</span>
      <span className='px-12 py-2 border border-gray-800 rounded-lg inline-block'>Salt, Sugar & Jaggery</span>
     </p>
    </div>
  );
};

export default Categories;