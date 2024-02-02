// import React, { useRef, useCallback } from 'react';
// import Webcam from 'react-webcam';

// // interface WebcamCaptureProps {
// //   onCapture: (imageSrc: string) => void;
// // }

// const WebcamCapture: React.FC<WebcamCaptureProps> = ({ onCapture }) => {
//   const webcamRef = useRef<Webcam>(null);

//   const captureImage = useCallback(() => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       onCapture(imageSrc || '');
//     }
//   }, [onCapture]);

//   return (
//     <div>
//       <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
//       <button onClick={captureImage}>Take a Picture</button>
//     </div>
//   );
// };

// export default WebcamCapture;
