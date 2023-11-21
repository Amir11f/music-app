'use client'
import { GettingGenres } from "@/components/GenresComponents/GettingGenres";
import axios from "axios";
import { useEffect } from "react";

 const Genres = ()=>{

  useEffect(()=>{
    console.log('first')

  })

  return (
    <>
      <GettingGenres/>
      <h1>hi</h1>
    </>
  )
}

export default Genres
