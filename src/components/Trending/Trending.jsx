'use client'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { songs } from '../../data/trendingSongsData';
import { useStateContext } from '../../contexts/ContextProvider.js';
import SampleImage from '../../public/default_player_image.webp';

const Trending = () => {
  const [index, setIndex] = useState(0);
  const [songName, setSongName] = useState(songs[0].title);
  const [artist, setArtist] = useState(songs[0].artist);
  const [img, setImg] = useState(songs[0].img);
  const [noOfPlays, setNoOfPlays] = useState(songs[0].noOfPlays);
  const noOfSongs = songs.length;
  const { setcurrentSong } = useStateContext();

  useEffect(() => {
    const dots = document.getElementsByClassName('trend-circle');
    for (let x = 0; x < dots.length; x++) {
      dots[x].classList.remove('bg-gray-600');
      dots[x].classList.add('bg-gray-100');
    }
    dots[index].classList.remove('bg-gray-100');
    dots[index].classList.add('bg-gray-600');
    setSongName(songs[index].title);
    setArtist(songs[index].artist);
    setImg(songs[index].img);
    setNoOfPlays(songs[index].noOfPlays);
  }, [index]);

  const selectSongHandler = (song) => {
    setcurrentSong((prev) => {
      return {
        ...prev,
        ...song,
        image: song.img ? song.img : SampleImage,
      };
    });
  };

  return (
    <div className='flex items-center justify-between pl-6'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-7xl font-extrabold text-gray-100'>{songName}</h1>
          <div className='flex gap-4 items-center'>
            <p className='text-3xl text-gray-100'>{artist}</p>
            <span className='text-gray-400 text-xl tracking-tighter'>
              {noOfPlays} Plays
            </span>
          </div>
        </div>

        <div className='flex gap-5 items-center mt-4'>
          <button
            className='swatch_bg-secondaryLight text-gray-100 text-md p-4 px-6 rounded-full font-bold hover:bg-[#234DA2]/95'
            onClick={() =>
              selectSongHandler({
                title: songName,
                artist: artist,
                img: img,
              })
            }
          >
            Listen Now
          </button>
          <button className='rounded-full p-2 border-2 border-gray-300'>
            <FavoriteIcon className='swatch_text-secondary' />
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-12 items-center'>
        <div className='flex flex-col items-center gap-4'>
          {songs.map((item, ind) => {
            if (ind == 0) {
              return (
                <span
                  key={ind}
                  className='w-1 h-1 bg-gray-600 cursor-pointer rounded-full trend-circle'
                ></span>
              );
            }
            return (
              <span
                key={ind}
                className='w-1 h-1 bg-gray-100 cursor-pointer rounded-full trend-circle'
              ></span>
            );
          })}
        </div>

        <div className='flex flex-col items-center gap-4'>
          <IconButton
            className='bg-[#080808] text-gray-100'
            onClick={() => {
              index == 0 ? '' : setIndex(index - 1);
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
          <IconButton
            className='bg-[#080808] text-gray-100'
            onClick={() => {
              index == noOfSongs - 1 ? '' : setIndex(index + 1);
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Trending;
