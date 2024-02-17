import React, { useEffect } from 'react';

const DynamicGoogleMap = () => {
  useEffect(() => {

    const latitude = 21.317650295887194;
    const longitude = 76.19741480895122;

    const iframeCode = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24929.867916541945!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQ3JzM5LjgiTiA4McKwNjYsNDYuMiJF!5e0!3m2!1sen!2sin!4v1645378221921!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    document.getElementById('map-container').innerHTML = iframeCode;
  }, []);

  return <div id="map-container" />;
};

export default DynamicGoogleMap;
