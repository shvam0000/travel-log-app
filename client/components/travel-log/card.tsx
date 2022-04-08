import { CardProps } from '../../utils/interface';

const Card = ({ name, title, experience }: CardProps) => {
  return (
    <div className='flex flex-col items-center w-1/4 text-center mx-auto shadow-2xl py-10'>
      <div className='font-bold text-2xl text-blue-600'>{name}</div>
      <div className='font-semibold text-xl text-blue-400 my-5'>{title}</div>
      <div className='font-medium text-black'>{experience}</div>
    </div>
  );
};

export default Card;
