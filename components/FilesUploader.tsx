'use client'
import { 
    CheckCircleIcon,
    CircleArrowDown,
    HammerIcon,
    RocketIcon,
    SaveIcon
 } from 'lucide-react'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive, isFocused, isDragAccept} = useDropzone({onDrop})

  return (
    <div className='h-full flex flex-col gap-4 items-center justify-center mx-auto'>
        {/* loading... */}
    <div {...getRootProps()} 
    className={`p-10 border-4 border-dashed border-indigo-600 mt-10 text-indigo-600 rounded-lg text-center w-[90%] h-96 flex flex-col items-center justify-center
    ${isFocused || isDragAccept ? 'bg-indigo-300' : 'bg-indigo-100'}`}>
      <input {...getInputProps()} />
      <div className='flex flex-col items-center justify-center gap-4'>
      {
          isDragActive ? (
            <>
            <RocketIcon className='w-20 h-20 animate-ping'/>
            <p>Drop the files here ...</p>
            </>
            ) : (
                <>
                <CircleArrowDown className='w-20 h-20'/>
                <p>Drag 'n' drop some files here, or click to select files</p>
                </>
        )}
    </div>
    </div>
    </div>
  )
}

export default FileUploader;