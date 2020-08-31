import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import App from '../crop/ImageCrop';


const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

   
  const clear = () => {
    setImgSrc({ imgSrc: "" });
  }
  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button 
        onClick={capture}>Capture photo
      </button>
      <App img={imgSrc}/>
      {imgSrc && (
        <button onClick={clear}>Clear</button>
      )}
    </>
  );
};

export default WebcamCapture;