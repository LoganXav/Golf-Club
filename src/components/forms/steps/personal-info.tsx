'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { SelectField } from '@/components/ui/select-field';
// import ImageUploader from '../../upload/image-uploader';
import Image from 'next/image';

import { Button } from '../../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormDTO } from '@/lib/schema';
import { Label } from '@/components/ui/label';

interface StepProps {
  register: UseFormRegister<FormDTO>;
  errors: FieldErrors<FormDTO>;
}

export function PersonalInfo({ register, errors }: StepProps) {
  const Gender = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  // const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  // const [capturedImage, setCapturedImage] = useState<string>('');
  // const handleFileUpload = (file: File) => {
  //   setUploadedFile(file);
  //   // Handle file upload logic here
  // };

  // const handleCapture = (imageSrc: string) => {
  //   setCapturedImage(imageSrc);
  //   // Handle captured image logic here
  // };
  // const handleFileUpload = (file: File) => {
  //   // Handle the uploaded file here, for example, send it to your API
  //   console.log('Uploaded File:', file);
  // };

  return (
    <div>
      <h1 className="text-xl font-semibold leading-none    ">
        Personal Information
      </h1>

      <Dialog>
        <DialogTrigger className="">
          <div className="p-4   ">
            <div className="h-[110px] w-[110px] rounded-full bg-white  ">
              <Image
                src="/avatar.svg"
                width={70}
                height={70}
                alt="Avatar"
                className="ml-5 items-center pt-5 "
              />
              <div className="  relative   ">
                <Image
                  src="/edit.svg"
                  width={30}
                  height={30}
                  alt="Avatar"
                  className="absolute bottom-14 left-14 ml-5  items-center rounded-full    pt-5  "
                ></Image>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="absolute">
          <DialogHeader>
            <DialogTitle className="text-3xl">Upload Picture</DialogTitle>
            {/* <DialogDescription>
              Multiple options available to make payment seamless
            </DialogDescription> */}
          </DialogHeader>
          <div className="f mx-auto flex  w-full flex-col items-center justify-center gap-4 ">
            <Button
              className="border border-ring hover:border-primary"
              variant="ghost"
              size="lg"
            >
              {/* <ImageUploader onFileUpload={handleFileUpload} /> */}
            </Button>
            <span>OR</span>
            <Button
              className="border border-ring hover:border-primary"
              variant="ghost"
              size="lg"
            >
              Take Photo
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className=" grid gap-4  lg:grid-cols-2   ">
        {/* Image Upload */}

        {/* Webcam Capture */}
        {/* <WebcamCapture onCapture={handleCapture} /> */}

        {/* Display Uploaded File */}
        {/* {uploadedFile && (
        <div className="h-30 w-30 border rounded-full ">
          <h2>Uploaded File:</h2>
          <img
            className="h-40 w-20 "
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded"
          />
        </div>
      )} */}

        {/* Display Captured Image */}
        {/* {capturedImage && (
        <div>
          <h2>Captured Image:</h2>
          <img src={capturedImage} alt="Captured" />
        </div>
      )} */}
        {/* <ImageUploader onFileUpload={handleFileUpload}></ImageUploader> */}

        <div>
          <Input placeholder="First Name" {...register('firstName')} />
          {errors.firstName?.message && (
            <Label variant="error">{errors.firstName.message}</Label>
          )}
        </div>
        <div>
          <Input placeholder="Last Name" {...register('lastName')} />
          {errors.lastName?.message && (
            <Label variant="error">{errors.lastName.message}</Label>
          )}
        </div>
        <div>
          <SelectField options={Gender} placeholder=" Sex" />
        </div>
        <Input type="number" placeholder="Age" />
        <Input placeholder="Occupation" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Email Address" />
        <Input placeholder="NIN" />

        <div className="flex flex-col lg:col-span-2">
          <Textarea
            className=" "
            placeholder="Tell us why you  would like to be a member?"
          ></Textarea>
        </div>
      </div>
    </div>
  );
}
