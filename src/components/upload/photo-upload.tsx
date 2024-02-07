'use client';
import * as React from 'react';
import { Icons } from '../icons';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { FileRejection, useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AcceptedFile extends File {
  preview: string;
}

export function PhotoUpload() {
  const [file, setFile] = React.useState<AcceptedFile[]>([]);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [rejected, setRejected] = React.useState<FileRejection[]>([]);

  const onDrop = React.useCallback(
    (acceptedFile: File[], rejectedFile: FileRejection[]) => {
      if (acceptedFile.length) {
        setFile(
          acceptedFile.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        setDialogOpen(false);
        setRejected([]);
      }

      if (rejectedFile) {
        setRejected(rejectedFile);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png', '.gif'],
    },
    maxSize: 1024 * 3000,
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className="flex items-center gap-6">
      <Dialog>
        <DialogTrigger>
          <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-dashed bg-input lg:h-32 lg:w-32">
            {file.length && !rejected.length ? (
              <Image
                src={file[0]?.preview}
                alt={file[0]?.name || 'Profile picture'}
                fill={true}
                style={{ objectFit: 'cover' }}
                onLoad={() => {
                  URL.revokeObjectURL(file[0]?.preview);
                }}
              />
            ) : (
              <Icons.camera />
            )}
          </div>
        </DialogTrigger>
        <DialogContent className="absolute">
          <DialogTitle className="pb-8 font-reckless text-3xl">
            Take a Photo
          </DialogTitle>
          {file.length && !rejected.length && (
            <div
              className={cn(
                'mx-auto flex h-[13rem] w-full rounded-md border border-dashed'
              )}
            >
              {/* <div className="overflow-hidden rounded-full border border-foreground">
              <Icons.person />
            </div>
            <p className="text-lg">Drag & Drop a Photo Here</p>
            <span>or</span>
            <Button>Browse Files</Button>
            <span>File Types: JPEG, PNG, GIF. Size limited to 3 MB</span>
             */}
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
          )}
          <div className="mt-4 flex justify-center">
            <Button>Take Photo</Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="space-y-2">
        {file.length && !rejected.length ? (
          <p className="w-[15rem] truncate">
            {file[0]?.name || 'Profile picture'}
          </p>
        ) : (
          <p>Add a Photo to Your Profile (Optional)</p>
        )}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          {file.length && !rejected.length ? (
            <Button onClick={() => setFile([])}>Remove Photo</Button>
          ) : (
            <DialogTrigger>
              <Button>Add Photo</Button>
            </DialogTrigger>
          )}
          <DialogContent className="absolute">
            <DialogTitle className="pb-8 font-reckless text-3xl">
              Add a Photo
            </DialogTitle>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <div className="mx-auto flex h-full  w-full flex-col items-center justify-center space-y-4 rounded-md border border-dashed bg-success px-4 py-16 text-center text-muted">
                  <div className="overflow-hidden rounded-full border border-foreground">
                    <Icons.person />
                  </div>
                  <p className="text-lg">Drop Photo Here</p>
                  <span>or</span>
                  <Button disabled>Add Photo</Button>
                  <span>File Types: JPEG, PNG, GIF. Size limited to 3 MB</span>
                </div>
              ) : (
                <div
                  className={cn(
                    'mx-auto flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md border border-dashed bg-input px-4 py-16 text-center',
                    rejected?.length &&
                      'bg-destructive text-destructive-foreground'
                  )}
                >
                  <div className="overflow-hidden rounded-full border border-foreground">
                    <Icons.person />
                  </div>
                  <p className="text-lg">Drag & Drop a Photo Here</p>
                  <span>or</span>
                  <Button>Browse Files</Button>
                  <span>File Types: JPEG, PNG, GIF. Size limited to 3 MB</span>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
