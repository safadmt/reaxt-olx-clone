import React, { useEffect, useState } from 'react'
import { useCommonContext } from '../../context/CommonContext';
import { FaSearch } from "react-icons/fa";

function SearchInput() {
    const {state, dispatch} = useCommonContext()
    const [searchText, setSearchText] = useState("");
    
    useEffect(()=> {
        handleSearch()
    },[searchText])

    function handleSearch () {
        const regex = new RegExp(searchText, "i")
        const data = state.products.filter(item=> {
            return regex.test(item.product_name) || regex.test(item.brief_description)
        })
        dispatch({type:"filer_products", payload: data})
    }
  return (
    <div className="input-search-group flex bg-[#092230] w-full rounded border-2 border-[#092230]">
                <input
                  className="flex-1  outline-none border-none w-full px-3"
                  type="search"
                  value={searchText}
                  onChange={(e)=> setSearchText(e.target.value)}
                  placeholder="Search for Cars, Mobiles, Bikes, etc..."
                />
                <div
                  className="w-12 h-12 flex justify-center items-center hover:cursor-pointer"
                  style={{ maxWidth: "3rem" }}
                  onClick={handleSearch}
                >
                  <FaSearch color="white" className="" />
                </div>
              </div>
  )
}

export default SearchInput