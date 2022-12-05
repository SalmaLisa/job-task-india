import React from 'react';
import Brocli from '../components/Brocli';
import CurvedDiv from '../components/CurvedDiv';
import Products from '../components/Products';
import FooterCurve from '../shared.js/FooterCurve';

const Home = () => {
  return (
    <div>
      <div className='relative'>
      <CurvedDiv></CurvedDiv>
      </div>
      <div className='absolute top-40'>
        <Brocli></Brocli>
      </div>
      <div className="py-12 ml-20  w-9/12">
      <h1 className="text-4xl font-bold my-4">Similar Products</h1>
      <Products></Products>
      </div>
      <FooterCurve></FooterCurve>
    </div>
  );
};

export default Home;