// // // ImageUploader.tsx
// // import React, { useCallback, useState, useRef } from 'react';
// // import {
// //   useDropzone,
// //   DropzoneRootProps,
// //   DropzoneInputProps,
// // } from 'react-dropzone';
// // import Webcam from 'react-webcam';

// // interface ImageUploaderProps {
// //   onFileUpload: (file: File) => void;
// // }

// // const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileUpload }) => {
// //   const [capturedImage, setCapturedImage] = useState<string | null>(null);
// //   const webcamRef = useRef<Webcam>(null);

// //   // Function to handle file drop
// //   const onDrop = useCallback(
// //     (acceptedFiles: File[]) => {
// //       const file = acceptedFiles[0];
// //       onFileUpload(file);
// //     },
// //     [onFileUpload]
// //   );

// //   // UseDropzone hook
// //   const {
// //     getRootProps,
// //     getInputProps,
// //   }: { getRootProps: DropzoneRootProps; getInputProps: DropzoneInputProps } =
// //     useDropzone({
// //       onDrop,
// //       accept: 'image/*', // Specify accepted file types
// //     });

// //   // Function to capture image from webcam
// //   const captureImage = () => {
// //     if (webcamRef.current) {
// //       const imageSrc = webcamRef.current.getScreenshot();
// //       setCapturedImage(imageSrc);
// //       // You can send the imageSrc to your API or perform any other actions
// //     }
// //   };

// //   return (
// //     <div>
// //       {/* Dropzone for file upload */}
// //       <div {...getRootProps()}>
// //         <input {...getInputProps()} />
// //         <p>Drag 'n' drop an image file here, or click to select a file</p>
// //       </div>

// //       {/* React Webcam for image capture */}
// //       <Webcam audio={false} ref={webcamRef} />
// //       <button onClick={captureImage}>Capture Image</button>

// //       {/* Display the captured image */}
// //       {capturedImage && (
// //         <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%' }} />
// //       )}
// //     </div>
// //   );
// // };

// // export default ImageUploader;
// import React, { useCallback, useState } from 'react';
// import { useDropzone } from 'react-dropzone';

// interface ImageUploaderProps {
//   onFileUpload: (file: File) => void;
// }

// const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileUpload }) => {
//   const onDrop = useCallback(
//     (acceptedFiles: File[]) => {
//       if (acceptedFiles.length > 0) {
//         onFileUpload(acceptedFiles[0]);
//       }
//     },
//     [onFileUpload]
//   );

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       <p>Drag and Drop a Photo here </p>
//     </div>
//   );
// };

// export default ImageUploader;
