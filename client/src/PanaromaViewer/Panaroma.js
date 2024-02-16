import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import * as THREE from 'three';

const PanoramaViewer = () => {
  const viewerRef = useRef(null);

  const panorama = "https://res.cloudinary.com/depauxgru/image/upload/v1708066346/omxbfulch0akvqoekhh3.jpg";

  useEffect(() => {
    const panoramaImage = new PANOLENS.ImagePanorama(panorama);
    const viewer = new PANOLENS.Viewer({
      container: viewerRef.current,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      controlBar: false,
    });
    viewer.add(panoramaImage);
  }, []);

  return (
    <div className='flex h-[100vh] items-center bg-black'>
      <div ref={viewerRef} className="flex h-[100%] fixed w-[100%]"></div>
    </div>
    
  );
};

export default PanoramaViewer;