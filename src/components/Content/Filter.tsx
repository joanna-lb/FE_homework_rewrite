import * as React from "react";
import 'react-dom'
import './style/index.scss'
import {useState} from "react";
import {ALL, PHYSICAL,VIRTUAL} from "../../shared/constants";

interface FilterProp {
  handleChangeShowContent:(filterType:string)=>void
  filterType:string
}

const Filter=({handleChangeShowContent,filterType}:FilterProp)=>{
  const[activeStyle,setActiveStyle]=useState(ALL)
  const[searchContent,setSearchContent]=useState('')

  const handleClick = (filterType:string) => {
    handleChangeShowContent(filterType)
    setActiveStyle(filterType)
  }



  // @ts-ignore
  return(
    <>
      <div className="fliter">
        <div className="btns">
          <button type="button" className={activeStyle===ALL?'active':''} onClick={()=>handleClick(ALL)} >All</button>
          <button type="button" onClick={()=>handleClick(PHYSICAL)} className={filterType===PHYSICAL?'active':''} >Physical</button>
          <button type="button"  onClick={()=>handleClick(VIRTUAL)} className={filterType===VIRTUAL?'active':''}>Virtual</button>
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
