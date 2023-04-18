import Image from 'next/image';
import React, { Fragment } from 'react';

const CocoaSection = () => {
  return (
    <Fragment>
      <p className='text-center my-2'>Cocoa</p>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 px-2'>
        <div className='p-3'>
          <Image
            className='object-cover h-48 w-96 filter hover:scale-110 transition duration-500 ease-in-out grayscale hover:grayscale-0'
            src='https://images.unsplash.com/photo-1507576164121-220762647800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
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
            <i>Theobroma cacao L</i> atau Cocoa tanaman ini berasal dari hutan
            hujan amazon Amerika Selatan yang dapat tumbuh dengan baik pada
            wilayah yang berdekatan dengan garis khatulistiwa dengan suhu
            berkisar 30 derajat celcius hingga 32 derajat celcius tanaman ini
            dibudidayakan untuk diambil bijinya sebagai bahan utama pembuatan
            coklat melalui serangkaian proses fermentasi.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default CocoaSection;
