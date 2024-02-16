import React from 'react'
import bg from '../assets/Ownerbg.jpg'
function Ownerpage() {
    return (
        <>
        <div className='relative bottom-[10vh] bg-tertiary flex w-[full] ' >
        <div className='w-[10%] bg-tertiary ' ></div>
        <div className='l-[5vw] w-[90%] rounded-bl-[10vh]  bg-tertiary ' >
            <img className='w-[100%] rounded-bl-[10vh] bg-tertiary ' src={bg} alt="" />
        </div>
        </div>

        <div className='w-[full] ' >
            
        </div>
        </>
    )
}

export default Ownerpage
