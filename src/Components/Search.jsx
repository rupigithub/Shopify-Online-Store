import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

function Search() {
  const[input, setInput] = useState('')
  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  return (
    <>
      <div className="search-icon">
        <span><GoSearch/></span>
        <input value = {input} type="text" placeholder="search item" onChange={handleInput}></input>
      </div>
    </>
  );
}
console.log(Search.input)
export default Search;