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
  setFile?: React.Dispatch<React.SetStateAction<AcceptedFile[]>>;
  rejected: FileRejection[];
  webcamOpen: boolean;
  setWebcamOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CustomMediaStream extends MediaStream {
  getVideoTracks(): MediaStreamTrack[];
}

export function WebcamCapture({
  file,
  //   setFile,
  rejected,
  webcamOpen,
  setWebcamOpen,
}: PropTypes) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isLoading, setLoading] = React.useState(true);

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

  return (
    <>
      {file.length && !rejected.length ? (
        <div className="mx-auto flex h-[13rem] w-full rounded-md border border-dashed">
          <Image
            src={file[0]?.preview}
            alt={file[0]?.name || 'Profile picture'}
            fill={true}
            style={{ objectFit: 'cover' }}
            onLoad={() => {
              URL.revokeObjectURL(file[0]?.preview);
            }}
          />
        </div>
      ) : (
        <div className="flex min-h-[10rem] w-full items-center justify-center">
          {isLoading ? (
            <div className="h-8 w-8 animate-spin">
              <Icons.spinner />
            </div>
          ) : (
            <video ref={videoRef} autoPlay muted playsInline />
          )}
        </div>
      )}
      <div className="mt-4 flex justify-center">
        <Button>Take Photo</Button>
      </div>
    </>
  );
}
