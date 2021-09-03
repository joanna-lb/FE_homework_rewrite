import * as React from "react";
import 'react-dom'
import './style/index.scss'
import {useState} from "react";
import {ALL, PHYSICAL,VIRTUAL} from "../../shared/constants";



const Filter=()=>{
  const[activeStyle,setActiveStyle]=useState(ALL)
  const[searchContent,setSearchContent]=useState('')




  // @ts-ignore
  return(
    <>
      <div className="fliter">
        <div className="btns">
          <button type="button" className={activeStyle===ALL?'active':''} >All</button>
          <button type="button" >Physical</button>
          <button type="button"  >Virtual</button>
        </div>
        <div className="search">
          <i className="icofont-search-1"></i>
          <input type="text" name=""
                 value={searchContent}
                 onChange={(e)=>setSearchContent(e.target.value)}
          />
        </div>
        <div className="list-types">
          <i className="icofont-navigation-menu"></i>
          <i className="icofont-listing-box active"></i>
        </div>
      </div>
    </>
  )
}
export default Filter
