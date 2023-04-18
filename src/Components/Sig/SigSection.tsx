import Image from 'next/image';
import React, { Fragment } from 'react';

const SigSection = () => {
  return (
    <Fragment>
      <p className='text-center my-2'>Sistem Informasi Geografis ( GIS )</p>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 px-2'>
        <div className='p-3 shadow shadow-slate-500 rounded flex flex-col justify-center align-middle order-last sm:order-last lg:order-first'>
          <p className='text-center'>
            <cite>
              Sistem informasi geografis (GIS) dibangun untuk dapat melakukan
              analisis, mengolah, menyimpan dan mengintegrasikan data spasial
              (geografis) dan data non-spasial (kualitatif){' '}
              <b>(Senocak & Guner Goren, 2022)</b>
            </cite>
            ,
          </p>
          <br />
          <p className='text-center'>
            Output dari pengolahan data tersebut selanjutnya akan
            ditransformasikan kepada layer - layer peta guna mendapatkan
            infomasi baru yang berguna untuk mengambil keputusan terkait
            keruangan dan fenomena yang sedang terjadi pada suatu wilayah.
          </p>
        </div>
        <div className='p-3 order-first md:order-first lg:order-last'>
          <Image
            className='object-cover h-48 w-96 filter hover:scale-110 transition duration-500 ease-in-out grayscale hover:grayscale-0'
            src='https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80'
            alt='cocoa'
            width={268}
            height={183}
            loading='lazy'
            loader={({ src }) => src}
            layout='responsive'
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SigSection;
