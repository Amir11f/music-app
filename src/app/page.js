'use client'
import { TopArtists, Genres, TopCharts, Player, Trending } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import Login from '../components/LoginPage/Login'
import {useEffect } from 'react';
import { headers } from '../../next.config';


export default function Home() {

  const { activeMenu, tokenVal  } = useStateContext();
  
  return (
    <>
      <main className="overflow-auto">
          <div 
            className={`flex flex-col gap-4 mt-14 px-8 pb-4 overflow-auto ${
              activeMenu && 'md:ml-72'
            }`}
          >
            <Trending />
            <div className=' lg:grid grid-cols-6 gap-x-6 gap-4 mt-6'>
              <TopArtists />
              <Player />
              <div className='lg:grid col-span-4 lg:grid-cols-2 xl:grid-cols-4 row-span-1 rounded-md flex flex-col gap-4 mt-2'>
                <Genres />
                <TopCharts />
              </div >
            </div>
          </div>
      </main>
    </>
    
  )
}
