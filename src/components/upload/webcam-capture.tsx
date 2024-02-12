import * as React from 'react';
import { FileRejection } from 'react-dropzone';
import { type AcceptedFile } from './photo-upload';
import Image from 'next/image';
// import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Icons } from '../icons';

interface PropTypes {
  file: AcceptedFile[];
  setFile: React.Dispatch<React.SetStateAction<AcceptedFile[]>>;
  rejected: FileRejection[];
  webcamOpen: boolean;
  setWebcamOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CustomMediaStream extends MediaStream {
  getVideoTracks(): MediaStreamTrack[];
}

export function WebcamCapture({
  file,
  setFile,
  rejected,
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
          video: { width: 800, height: 400 },
        })) as CustomMediaStream;

        let video = videoRef.current;
        console.log(stream, 'stream');
        console.log(video, 'video');

        setLoading(false);

        if (video) {
          video.srcObject = stream;
          video.play();
        }
      } catch (error) {
        toast('error');
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
    }
  };
  const captureSelected = () => {
    setFile(() =>
      Object.assign(file, {
        preview: screenshot,
      })
    );
    console.log(file);
    setWebcamOpen(false);
  };

  const retry = () => {
    setScreenshot(null);
  };

  return (
    <>
      <div className="flex min-h-[10rem] w-full items-center justify-center">
        {isLoading ? (
          <div className="h-8 w-8 animate-spin">
            <Icons.spinner />
          </div>
        ) : (
          <video ref={videoRef} autoPlay muted playsInline />
        )}
      </div>

      <div className="mt-4 flex justify-center">
        <Button onClick={!screenshot ? capture : retry}>Take Photo</Button>
        <Button onClick={captureSelected}>Use</Button>
      </div>
    </>
  );
}
