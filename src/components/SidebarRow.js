import React from 'react'
import './sidebaRrow.css'
const SidebarRow = ({selected,title,Icon}) => {
    return (
        <div className={`sidebarRow ${selected&&"selected"} `}>
            <Icon className="sidebarRow_icon"/>
           <h2 className="sidebarRow_title">{title}</h2> 
        
        </div>
    )
}
export default SidebarRow
  
       