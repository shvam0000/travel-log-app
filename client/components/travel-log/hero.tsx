import React from 'react';
import { Travel } from '../../public/icons/travel-log';

const MainHeader = () => {
  return (
    <div className='bg-blue-400 font-bold text-3xl flex justify-center items-center text-center py-2 my-4 w-1/2 mx-auto text-white rounded-md'>
      <span className='mx-2'>Travel Log</span>
      <figure>
        <Travel />
      </figure>
    </div>
  );
};

export default MainHeader;
