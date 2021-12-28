import Image from 'next/image'
import React from 'react'

function Avatar({url, className}) {
    return (
        <Image
        width={50}
        height={40}
        src={url}
        alt="Profile Pic"
        className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-105 ${className}
        `}
        />
            
        
    )
}

export default Avatar
