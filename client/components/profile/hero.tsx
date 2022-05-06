import React, { useEffect, useState } from 'react';
import { Subnavbar } from '../shared';

const ProfileHero = () => {
  const [userName, setUserName] = useState<string | any>('');
  const [email, setEmail] = useState<string | any>('');

  useEffect(() => {
    setUserName(localStorage.getItem('username'));
    setEmail(localStorage.getItem('email'));
  }, []);

  return (
    <div>
      <div className="my-5 bg-blue-400 w-60 py-4 px-2 mx-auto rounded-xl text-white font-bold text-xl flex justify-center items-center">
        Profile
      </div>
      {/* <div className="py-10">
        <Subnavbar />
      </div> */}
      <div className="text-xl font-bold flex justify-center items-center">
        Username - {userName}
      </div>
      <div className="text-xl font-bold flex justify-center items-center">
        Email - {email}
      </div>
    </div>
  );
};

export default ProfileHero;
