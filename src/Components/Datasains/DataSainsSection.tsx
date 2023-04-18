import Image from 'next/image';
import React, { Fragment } from 'react';
import imgDataSains from '../../assets/img/datasains.jpg';

const DataSainsSection = () => {
  return (
    <Fragment>
      <p className='text-center my-2'>Data Sains</p>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 px-2'>
        <div className='p-3'>
          <Image
            className='object-cover h-48 w-96 filter hover:scale-110 transition duration-500 ease-in-out grayscale hover:grayscale-0'
            src={imgDataSains}
            alt='cocoa'
            width={268}
            height={183}
            loading='lazy'
            loader={({ src }) => src}
            layout='responsive'
          />
        </div>
        <div className='p-3 shadow shadow-slate-300 rounded flex flex-col justify-center align-middle'>
          <br />
          <p className='text-center'>
            Data science adalah bidang yang menggunakan matematika, statistika,
            dan komputasi untuk menganalisis data dan menghasilkan wawasan
            bisnis atau ilmiah, Tujuannya adalah untuk membantu pengambilan
            keputusan dan menjawab pertanyaan yang rumit tertkait dengan
            fenomena yang sedang terjadi.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DataSainsSection;
