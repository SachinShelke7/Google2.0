import React from 'react'

function Avatar({url}) {
    return (
        <img loading="lazy"
        src={url}
        alt="Profile Pic"
        className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        />
            
        
    )
}

export default Avatar
