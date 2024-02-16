import React, { useEffect, useState } from 'react'
import img from '../assets/Tenantbg.jpeg'
import search from '../assets/search.png'
import { useAuth } from '../contexts/AuthContext'

function Tenant() {

    const {token} = useAuth;

    const [properties, setProperties] = useState([]);
    
    const getProperties = async()=>{
        try {
            const response = await fetch("http://localhost:8000/api/v1/property/getAllProperties",{
                method: "GET",
                headers: {
                    'Authorization': `${token}`
                }
            })

            const res = response.json();
            setProperties(res.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getProperties();
    },[])

    return (
        <>
            <div className=' flex flex-col bg-tertiary '>
                <div className='flex ' >
                    <div className='w-[8%] bg-tertiary ' ></div>
                    <img className=' w-[92%]  bg-tertiary  rounded-bl-[5vw]  ' src={img} alt="" />
                </div>
                <div className="absolute top-[50vh] left-[20vw]  h-[8vh] w-[50vw] rounded-full bg-gray-400 text-black  border-[2px] flex items-cente border-black ">
                    <div className="  bg-gray-300 w-[4vw]  rounded-full p-[10px] border border-black  ">
                        <img className=' ' src={search} alt="" /></div>
                    <input
                        type="text"
                        className=" w-[45vw] bg-gray-400 text-[22px] placeholder-black text-black m-1 mr-5  pl-[5vw] "
                        placeholder=' Search .........'
                    />
                </div>

               

            </div>

            <div className='h-[30vh] bg-tertiary '  >

            </div>
        </>
    )
}

export default Tenant
