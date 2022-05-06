import { MainHeader, AddLog, Card } from './';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Subnavbar } from '../shared';
import { ProfileHero } from '../profile';
import Link from 'next/link';

const TravelLogComponent = () => {
  const [cardData, setCardData] = useState<any>([]);
  const [addLog, setAddLog] = useState(true);
  const [viewLog, setViewLog] = useState(false);
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts/')
      .then((res) => {
        console.log(res.data);
        setCardData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addLogHandler = () => {
    setAddLog(true);
    setViewLog(false);
    setProfile(false);
  };

  const viewLogHandler = () => {
    setAddLog(false);
    setViewLog(true);
    setProfile(false);
  };

  const profileHandler = () => {
    setAddLog(false);
    setViewLog(false);
    setProfile(true);
  };

  return (
    <>
      <MainHeader />

      <div className="flex justify-center items-center py-10">
        <div
          onClick={addLogHandler}
          className="cursor-pointer flex justify-center items-center mx-10 bg-blue-500 py-2 px-4 rounded-xl text-white font-bold text-xl">
          Add log
        </div>
        <div
          onClick={viewLogHandler}
          className="cursor-pointer flex justify-center items-center mx-10 bg-blue-500 py-2 px-4 rounded-xl text-white font-bold text-xl">
          View Logs
        </div>
        <div
          onClick={profileHandler}
          className="cursor-pointer flex justify-center items-center mx-10 bg-blue-500 py-2 px-4 rounded-xl text-white font-bold text-xl">
          Profile
        </div>
      </div>

      {viewLog ? (
        <div className="flex flex-wrap justify-center items-center m-auto">
          {cardData.map((item: any) => (
            <div key={item.desc} className="flex flex-wrap mx-10 my-10">
              <Card
                name={item.username}
                title={item.title}
                experience={item.desc}
              />
            </div>
          ))}
        </div>
      ) : addLog ? (
        <AddLog />
      ) : profile ? (
        <ProfileHero />
      ) : null}
    </>
  );
};

export default TravelLogComponent;
