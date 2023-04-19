import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import imgCococa from '../../assets/img/kakao.jpeg';

const CococaPages = () => {
  const [flag, setFlag] = useState(true);

  const handleChange = () => {
    setFlag(!flag);
  };

  return (
    <Fragment>
      <p className='text-center my-2'>Keadaan Komoditas Kakao di Indonesia</p>
      <div
        className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 px-2 cursor-pointer'
        onClick={handleChange}
      >
        <div className='p-3'>
          <Image
            className='object-cover h-48 w-96 filter hover:scale-110 transition duration-500 ease-in-out grayscale hover:grayscale-0'
            src={imgCococa}
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
          {flag && (
            <div>
              <p className='text-center'>
                Kakao adalah tanaman hutan hujan tropis yang sangat cocok
                dibudidayakan di Indonesia terbukti komoditas ini mampu diekspor
                ke 5 benua dengan nilai ekspor sekitar <b>US$ 141,61</b> juta,
                nilai ekspor yang besar tersebut menjadikan sektor ini sebagai
                komoditas dengan potensi pasar cukup tinggi.
              </p>
              <br />
              <p className='text-center'>
                <b>
                  Alih fungsi lahan, luas areal berkurang, tanaman tidak
                  produktif, terbatasnya penyuluhan dan pelatihan serta
                  kurangnya akses terhadap teknologi menjadi permasalahan utama
                  pada sektor komoditas kakao
                </b>
              </p>
            </div>
          )}
          {!flag && (
            <div>
              <p className='text-center'>
                Pemerintah selaku stakeholder terkait telah melakukan kebijakan
                guna meningkatkan kembali produktivitas kakao di Indonesia
                seperti melakukan{' '}
                <b>
                  rehabilitasi, intensifikasi, ekstensifikasi, dan diversifikasi
                </b>{' '}
                namun dari berbagai kebijakan tersebut belum berhasil dengan
                baik.
              </p>
              <br />
              <p className='text-center'>
                Pada penelitian ini memberikan sebuah ide atau gagasan untuk
                mengatasi permasalahan tersebut dengan cara mengelompokan daerah
                dengan <mark>Potensi Kurang Baik</mark> dan{' '}
                <mark className='bg-green-500'>Potensi Baik</mark> berbasis
                pemetaan dengan harapan daerah tersebut di berikan program atau
                penyuluhan yang tepat sesuai dengan potensinya
              </p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CococaPages;
