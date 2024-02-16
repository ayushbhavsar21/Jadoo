import React from 'react'
import bg from '../assets/Ownerbg.jpg'
function Ownerpage() {
    return (
        <div className='bg-tertiary'>
            <div className='relative bottom-[10vh]  bg-tertiary flex w-[full] ' >
                <div className='w-[10%] bg-tertiary ' ></div>
                <div className='l-[5vw] w-[90%] rounded-bl-[10vh]  bg-tertiary ' >
                    <img className='w-[100%] rounded-bl-[10vh] h-[80vh] bg-tertiary ' src={bg} alt="" />
                </div>
            </div>

            <div className='w-[full] flex flex-col  items-center ' >
                <h1 className='font-bold text-[24px] mt-0 ' >FILL OUT THE FORM</h1>
                <div className=' flex flex-col w-[70%]  ' >
                    <h1 className='text-[22px] border-b-[2px] border-black font-bold mb-8 ' >Personal Details</h1>
                    <h1 className='text-[20px] font-semibold mb-2 ' >Name</h1>
                    <input type="text" placeholder='Name' className='mb-5 h-[5vh] border-b-[1px] border-black bg-gray-100' ></input>
                    <h1 className='text-[20px] font-semibold mb-2' >Contact</h1>
                    <input type="Number" placeholder='Contact Number/Phone Number' className='mb-8 h-[5vh] border-b-[1px] border-black bg-gray-100' ></input>
                </div>
                <div className=' flex flex-col w-[70%] ' >
                    <h1 className='text-[22px] border-b-[2px] border-black font-bold mb-8  ' >Property Details</h1>
                    <h1 className='text-[20px] font-semibold mb-2' >Title</h1>
                    <input type="text" placeholder='Title' className='mb-5 h-[5vh] border-b-[1px] border-black bg-gray-100 ' />
                    <h1 className='text-[20px] font-semibold mb-2' >Price</h1>
                    <input type="Number" placeholder='Price' className='mb-5 h-[5vh] border-b-[1px] border-black bg-gray-100'/>
                    <h1 className='text-[20px] font-semibold mb-2' >Location</h1>
                    <input type="text" placeholder='Location' className='mb-5 h-[5vh] border-b-[1px] border-black bg-gray-100' />
                    <h1 className='text-[20px] font-semibold mb-2' >Size</h1>
                    <input type="Number" placeholder='Size' className='mb-5 h-[5vh] border-b-[1px] border-black bg-gray-100' />
                    <h1 className='text-[20px] font-semibold mb-2' >Type</h1>
                    <input type="text" placeholder='Rent/Sell' className='mb-5 h-[5vh] border-b-[1px] border-black bg-gray-100' />
                    <h1 className='text-[20px] font-semibold mb-2' >Area</h1>
                    <input type="Number" placeholder='Area' className='mb-5 h-[5vh] border-b-[1px] border-black bg-gray-100' />
                    <h1 className='text-[20px] font-semibold mb-2' >Amenities</h1>
                    <input type="text" placeholder='Amenities' className='mb-5 h-[5vh] border-b-[1px] border-black bg-gray-100' />
                    <h1 className='text-[20px] font-semibold mb-2' >Description</h1>
                    <input type="text" placeholder='Description' className='mb-5 h-[5vh] border-b-[1px] border-black bg-gray-100' />
                    
                </div>
                <div className=' flex flex-col w-[70%]  ' >
                    <h1 className='text-[22px] border-b-[2px] border-black font-bold mb-8 ' >Add Photos</h1>
                    
                </div>
            </div>
        </div>
    )
}

export default Ownerpage
