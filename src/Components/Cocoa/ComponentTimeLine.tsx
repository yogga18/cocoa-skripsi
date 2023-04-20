import { useRouter } from 'next/router';
import React from 'react';

interface ComponentTimeLine {
  position: string;
  year: number;
  path: string;
}

const ComponentTimeLine = ({ position, year, path }: ComponentTimeLine) => {
  const router = useRouter();

  const handlePush = () => {
    router.push(path);
  };

  return (
    <>
      {position === 'left' && (
        <>
          <div
            className='col-span-4 w-full h-full cursor-pointer'
            onClick={handlePush}
          >
            <div className='w-full h-full bg-indigo-400 rounded-md p-3 md:pl-4'>
              <h1 className='text-white text-xl font-medium py-2'>Title</h1>
              <p className='text-gray-100 sm:text-sm text-xs'>SATU</p>
            </div>
          </div>
          <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full w-1 bg-indigo-300'></div>
            <div className='absolute w-9 h-9 pt-1 rounded-full bg-indigo-400 z-10 text-white text-center'>
              {year}
            </div>
          </div>
          <div className='col-span-4 w-full h-full'></div>
        </>
      )}

      {position === 'right' && (
        <>
          <div className='col-span-4 w-full h-full'></div>
          <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full w-1 bg-indigo-300'></div>
            <div className='absolute w-9 h-9 py-1 rounded-full bg-indigo-400 z-10 text-white text-center'>
              {year}
            </div>
          </div>
          <div
            className='col-span-4 w-full h-full cursor-pointer'
            onClick={handlePush}
          >
            <div className='w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4'>
              <h1 className='text-white text-xl font-medium py-2'>Title</h1>
              <p className='text-gray-100 sm:text-sm text-xs'>Dua</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ComponentTimeLine;
