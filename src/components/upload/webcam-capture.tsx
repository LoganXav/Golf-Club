'use client';
import * as React from 'react';
import { FileRejection } from 'react-dropzone';
import { type AcceptedFile } from './photo-upload';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Icons } from '../icons';

interface PropTypes {
  setFile: React.Dispatch<React.SetStateAction<AcceptedFile[]>>;
  rejected: FileRejection[];
  webcamOpen: boolean;
  setWebcamOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CustomMediaStream extends MediaStream {
  getVideoTracks(): MediaStreamTrack[];
}

export function WebcamCapture({
  setFile,
  webcamOpen,
  setWebcamOpen,
}: PropTypes) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isLoading, setLoading] = React.useState(true);
  const [screenshot, setScreenshot] = React.useState<string | null>(null);

  let stream: CustomMediaStream;

  React.useEffect(() => {
    async function startWebcam() {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        stream = (await navigator.mediaDevices.getUserMedia({
          video: { width: 400, height: 400 },
        })) as CustomMediaStream;

        let video = videoRef.current;

        setLoading(false);

        if (video) {
          video.srcObject = stream;
          video.play();
        }
      } catch (error) {
        toast.error('Trouble starting your camera');
        console.error(error);
        setWebcamOpen(false);
      }
    }
    if (webcamOpen) {
      startWebcam();
    }

    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        setWebcamOpen(false);
      }
    };
  }, [webcamOpen]);

  const capture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current?.videoWidth || 0;
    canvas.height = videoRef.current?.videoHeight || 0;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(
        videoRef.current as HTMLVideoElement,
        0,
        0,
        canvas.width,
        canvas.height
      );

      const dataURL = canvas.toDataURL('image/jpeg');
      setScreenshot(dataURL);
      videoRef.current?.pause();
    }
  };
  const captureSelected = () => {
    if (screenshot) {
      const newFile: AcceptedFile = {
        name: 'Webcam Image',
        preview: screenshot,
      };
      setFile((prevFiles) => [...prevFiles, newFile]);
    }
    setWebcamOpen(false);
  };

  const retry = () => {
    setScreenshot(null);
    videoRef.current?.play();
  };

  return (
    <>
      {isLoading ? (
        <div className="flex min-h-[10rem] w-full items-center justify-center">
          <span className="h-8 w-8 animate-spin">
            <Icons.spinner />
          </span>
        </div>
      ) : (
        <div className="mx-auto flex h-full max-h-[25rem] w-full flex-col items-center justify-center overflow-hidden rounded-md border border-dashed ">
          <video
            className="cover center h-auto w-full"
            ref={videoRef}
            autoPlay
            muted
            playsInline
          />
        </div>
      )}

      <div className="mt-8 flex items-center justify-center">
        {screenshot ? (
          <div className="flex items-center justify-center gap-4">
            <Button onClick={captureSelected}>Use</Button>
            <Button onClick={retry}>Retry</Button>
          </div>
        ) : (
          <Button disabled={isLoading} onClick={capture}>
            Take Photo
          </Button>
        )}
      </div>
    </>
  );
}
