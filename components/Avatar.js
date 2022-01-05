import Image from 'next/image'
import React from 'react'

function Avatar({url, className}) {
    return (
        <Image
        width={40}
        height={40}
        src={url}
        alt="Profile Pic"
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-105 ${className}
        `}
        />
            
        
    )
}

export default Avatar
