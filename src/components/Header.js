import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menuToggle } from '../utils/appSlice';
import { MENU_IMAGE, USER_ICON_IMAGE, YOUTUBE_IMAGE, YOUTUBE_SEARCH_SUGGESTIONS_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice';

const Header = () => {

    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();

    const cachedData = useSelector(store => store.search.searchObj);

    useEffect(()=>{
              
        const timer = setTimeout(()=>{
            // console.log(cachedData[searchText]);

            if(cachedData[searchText])
                setSuggestions(cachedData[searchText])
            else
                getSuggestions();
            
        },200);

        return () => {
            clearTimeout(timer);
        }
    },[searchText]);

    async function getSuggestions(){
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchText);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchText] : json[1]
        }));
    }

    

    function handleMenuToggle(){
        dispatch(menuToggle());
    }

  return (
    <div className="grid grid-flow-col shadow-lg p-1 m-1">
        <div className="flex col-span-1 pl-2 w-96 h-10">
            <img alt="hamburger-menu" src={MENU_IMAGE} className="pt-1 h-8 cursor-pointer" onClick={()=>handleMenuToggle()}/>
            <a href="/"><img alt="youtube=img" src={YOUTUBE_IMAGE} className="pl-2 w-36 h-11 cursor-pointer"/></a>
            
        </div>
        
            <div className="pl-10 col-span-10">
                <div>
                    <input type="text" placeholder="Search" className='w-1/2 border p-2 ml-2 rounded-l-full px-5' value={searchText} onChange={(e)=>setSearchText(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
                    <button className='p-2 cursor-pointer border rounded-r-full bg-gray-100' > Search </button> 
                </div>
                { showSuggestions && <div className="absolute mt-1 bg-white py-2 px-2 w-[29rem] shadow-lg rounded-2xl border border-gray-100">
                <ul>
                {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    🔍   &nbsp;&nbsp;&nbsp; {s}
                    </li>
                ))}
                </ul>
            </div>}
            </div>
   
        
        <div className="col-span-1 p-1 m-1">
            <img alt="user-icon" src={USER_ICON_IMAGE} className="w-8"/>
        </div>
    </div>
  )
}

export default Header