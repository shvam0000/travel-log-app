import Link from 'next/link';
import React from 'react';

const Subnavbar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center mx-10 bg-blue-500 py-2 px-4 rounded-xl text-white font-bold text-xl">
        <Link href={'/add-log'}>Add log</Link>
      </div>
      <div className="flex justify-center items-center mx-10 bg-blue-500 py-2 px-4 rounded-xl text-white font-bold text-xl">
        <Link href={'/travel-log'}>View Logs</Link>
      </div>
      <div className="flex justify-center items-center mx-10 bg-blue-500 py-2 px-4 rounded-xl text-white font-bold text-xl">
        <Link href={'/profile'}>Profile</Link>
      </div>
    </div>
  );
};

export default Subnavbar;
