import React, { useEffect, useState } from 'react'
import img from '../assets/Tenantbg.jpeg'
import { useAuth } from '../contexts/AuthContext'
import Tenantcard from './Tenantcard'

function Tenant() {

    const {token} = useAuth();

    const [properties, setProperties] = useState([]);
    
    const getProperties = async()=>{
        try {
            const response = await fetch("http://localhost:8000/api/v1/property/getAllProperties",{
                method: "GET",
                headers: {
                    'Authorization': `${token}`
                }
            })
            const res = await response.json();
            console.log(res);
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
                <div className='flex  justify-end' >
                    <img className=' md:w-[92%] w-[100%] h-[50vh] bg-tertiary  md:rounded-bl-[5vw]  ' src={img} alt="" />
                    
                </div>
               
                <div className='relative bottom-40 mx-auto'>
                <input
                        type="text"
                        className=" sm:w-[45vw] w-[90vw] h-12 rounded-2xl bg-gray-300 text-[20px] placeholder-black text-black"
                        placeholder=' Search .........'
                    />
                </div>
            </div>

            <div className='bg-tertiary'  >
              {properties.map(item=>(
                <Tenantcard 
                key={item.id}
                props={item}
                />
              ))}
            </div>
        </>
    )
}

export default Tenant