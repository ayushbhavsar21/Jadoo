import React, { useState } from 'react';
import Panorama from '../PanaromaViewer/Panaroma';
import logo from "../assets/icons8-price-30.png";
import logo1 from "../assets/icons8-area-chart-30.png";
import TextToSpeech from '../components/TextToSpeech';
function Tenantcard({props}) {
  const [showPanorama, setShowPanorama] = useState(false);

  const togglePanorama = () => {
    setShowPanorama(!showPanorama);
  };

  return (
    <div className='w-[90vw] bg-tertiary flex justify-center py-8 mx-auto'>
      <div className='sm:w-85vw w-95vw p-4 bg-white rounded-3xl flex flex-col justify-center gap-8 items-center xl:h-400px font-playfair shadow-2xl xl:flex-row h-auto'>
        <div className='lg:w-35% sm:w-60% w-95% rounded-3xl flex items-center justify-start'>
          <img src={props.VRImage} className='h-[350px] w-[380px] rounded-3xl' alt="" />
        </div>
        <div className='xl:w-58% w-90% flex flex-col justify-start items-start xl:justify-start gap-4'>
          <p className='text-xl'>₹{props.price}</p>
          <p className='text-xl font-semibold'>{props.title}</p>

          <div className="flex bg-gray-200 p-2 justify-between rounded-md w-full lg:flex-row flex-col">
            <div className="flex items-center">
              <img src={logo1} alt="" />
              <strong className="md:ml-2">Plot Area:</strong>&nbsp;{props.area} sq. ft.
            </div>
            <div className="flex items-center">
              <img src={logo} alt="" />
              <strong className="md:ml-2">Average Price:</strong>&nbsp;$100,000
            </div>
            <div className="flex items-center">
              <img src={logo} alt="" />
              <strong className="md:ml-2">Price:</strong>&nbsp;$120,005
            </div>
          </div>
          <p>Adress: {props.location}</p>
          <div className='pb-4'>
          <TextToSpeech text={props.description}/>
          </div>
          
          <div className='flex gap-4'>
          <button className='px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-400'>view in map</button>
            <button onClick={togglePanorama} className='px-2 bg-blue-500 py-2 rounded-md text-white hover:bg-blue-400'>View AR</button>
            <button className='px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-400'>Buy</button>
          </div>
        </div>
      </div>
      {showPanorama && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[5000] flex justify-center items-center bg-black bg-opacity-50">
          <div className='w-[100vw] h-[100vh]'>
            <Panorama 
            VRImage={props.VRImage}
            />
            <button className="absolute top-4 left-4 p-2 bg-black rounded-2xl px-3 hover:scale-105 text-white z-[10000]" onClick={togglePanorama}>Close</button>
            </div>
        </div>
      )}
    </div>
  );
}

export default Tenantcard;
