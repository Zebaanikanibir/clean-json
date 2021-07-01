import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useState } from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';



const ShowLikeDislike = ({ id, title, body, onChange }) => {
    const [value, setValue] = useState(false)
   
const handleOnSubmit =() =>{
       onChange(id,title,body)
      console.log(value)
      
       
    }
    return (
        <div className="post">
            <h4>{id}</h4>
            <h4>{title}</h4>
            <h4>{body}</h4>
            <BottomNavigation
  
  onChange={(e, newValue) =>{handleOnSubmit(id)
 
setValue(newValue)
}}
    
  value={value}
 
  showLabels
 
>
  <BottomNavigationAction label="Like" icon={<ThumbUpIcon />} />
  <BottomNavigationAction label="Dislike" icon={<ThumbDownAltIcon />} />
  
</BottomNavigation>
        </div>
    )
}

export default ShowLikeDislike
