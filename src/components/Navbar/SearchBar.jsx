'use client'
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useStateContext } from "@/contexts/ContextProvider";
import { useEffect } from "react";
import axios from "axios";

function SearchBar({ placeholder, data }) {
  const [filterSongs, setFilterSongs] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const {tokenVal} = useStateContext

  function handleFilter(event) {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((item) => 
       item.title.toLowerCase().startsWith(searchWord.toLowerCase())
    );

    if (searchWord === "") {
      setFilterSongs([]);
    } else {
      setFilterSongs(newFilter);
    }
  }

//   const SearchBarResult = async () =>{

//     const CLIENT_ID = "4ee029ea699548c684ec63daab67fd01"
//     const REDIRECT_URI = "http://localhost:3000"
//     const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
//     const RESPONSE_TYPE = "token"

//     const url = `https://api.spotify.com/v1/search?q=${wordEntered}&type=album%2Cplaylist%2Ctrack&limit=20&include_external=audio`
    
//     const search = await axios.get(url ,{
//         headers : {
//             'Authorization': `${tokenVal}`
//         }
//     })

//     const get = await search.json()
//     console.log(get)
    
//     return get
// }
  // useEffect(()=>{
  //   SearchBarResult()
  // },[])

  return (
    <>
      <div className="w-60">
        <form className="search w-full">
          <div className="w-full flex items-center justify-start ">
            <input
              className="outline-none w-full border-none text-gray-300 placeholder-gray-300 bg-transparent"
              type="text"
              placeholder={placeholder}
              onChange={handleFilter}
              value={wordEntered}
            />
            <SearchIcon
              className="text-gray-300 cursor-pointer"
              fontSize="small"
            />
          </div>
        </form>
      </div>
      {filterSongs?.length != 0 && (
        <ul className="dataItems bg-white absolute top-[2.5rem] left-0 w-full">
          {filterSongs.slice(0, 15).map((item, key) => {
            return (
              <li href={item.artist} key={key} className="text-gray-800">
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default SearchBar;
