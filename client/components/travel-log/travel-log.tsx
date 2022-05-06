import { MainHeader, AddLog, Card } from './';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const TravelLogComponent = () => {
  const [cardData, setCardData] = useState<any>([]);

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

  return (
    <>
      <MainHeader />
      <div className="flex justify-center items-center w-1/4 m-auto bg-blue-400 py-2 px-4 rounded-xl text-white font-bold text-xl">
        <Link href={'/add-log'}>Add log</Link>
      </div>
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
    </>
  );
};

export default TravelLogComponent;
