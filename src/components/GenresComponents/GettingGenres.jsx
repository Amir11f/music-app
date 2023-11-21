'use client'
import axios from "axios";
import { useState , useEffect} from "react";

export async function GettingGenres(){
    const[genres , setGenres]= useState()

    const url = 'https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=20';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f92bb4cf7bmsh39095ddd4360300p18573djsnd00a9ba35bf4',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }



    

    return(
        <>
        <h1>hello</h1>
        </>
    )


}