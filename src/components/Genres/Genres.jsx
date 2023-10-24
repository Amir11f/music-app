'use client'
import Link from 'next/link';
import { useStateContext } from '../../contexts/ContextProvider';
import { genres } from '../../data/data';

const Genres = () => {
  const { activeMenu, setActiveMenu } = useStateContext();


  return (
    <div className='row-span-1 lg:col-span-2 col-span-full w-full swatch_bg-brown p-4 rounded-md flex flex-col gap-4 overflow-y-scroll'>
      <div className='flex items-center justify-between'>
        <p className='text-lg text-gray-100 font-medium'>Genres</p>
        <Link href='/Genres'>
          <p className='text-sm swatch_text-primary'>See all</p>
        </Link>
      </div>

      <div className='flex items-center flex-wrap gap-3 overflow-y-scroll'>
        {genres.map((genre, index) => (
          <p
            key={genre}
            className={`swatch_bg-secondary text-lg rounded-lg font-semibold text-gray-100 p-4 ${
              activeMenu && 'text-sm'
            } `}
          >
            {genre} 
          </p>
        ))}
      </div>
    </div>
  );       
};

export default Genres;
