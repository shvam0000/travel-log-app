import { MainHeader, AddLog, Card } from './';

const TravelLogComponent = () => {
  return (
    <>
      <MainHeader />
      <AddLog />
      <div className='flex flex-wrap mx-10 my-10'>
        <Card
          name='Shivam Shekhar'
          title='Pondi'
          experience='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt!'
        />
        <Card
          name='Shivam Shekhar'
          title='Pondi'
          experience='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt!'
        />
        <Card
          name='Shivam Shekhar'
          title='Pondi'
          experience='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt!'
        />
        <Card
          name='Shivam Shekhar'
          title='Pondi'
          experience='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt!'
        />
        <Card
          name='Shivam Shekhar'
          title='Pondi'
          experience='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt!'
        />
        <Card
          name='Shivam Shekhar'
          title='Pondi'
          experience='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt!'
        />
      </div>
    </>
  );
};

export default TravelLogComponent;
