'use client'
import axios from "axios"
import { errorToJSON } from "next/dist/server/render"

export const SearchBarResult = async ( tokenVal) =>{

    const CLIENT_ID = "4ee029ea699548c684ec63daab67fd01"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const url = `https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg`
    
    const search = await axios.get(url ,{
        method : GET ,
        headers : {
            'Authorization': `Bearer ${tokenVal}`
        }
    })
    
    const res = await search.json().console.log(res)
    
}