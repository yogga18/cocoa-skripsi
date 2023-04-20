import React, { Fragment, useState } from 'react';
import DataKakaoIndonesia from '../../data/Indonesia/allover';
import ChartBar from '../Charts/ChartBar';
import ChartLine from '../Charts/ChartLine';

const CocoaSectionIndo = () => {
  const [flagLuasAreal, setFlagLuasAreal] = useState(1);
  const [flagProduksi, setFlagProduksi] = useState(1);
  const [flagTanaman, setFlagTanaman] = useState(1);
  const [flagKepemilikanLahan, setFlagKepemilikanLahan] = useState(1);

  const [barChartKakaoIndo] = useState({
    labels: DataKakaoIndonesia.map((item) => item.Year),
    datasets: [
      {
        label: 'Luas_Areal',
        data: DataKakaoIndonesia.map((item) => item.Luas_Areal),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Produktivitas',
        data: DataKakaoIndonesia.map((item) => item.Produktiv),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Produksi',
        data: DataKakaoIndonesia.map((item) => item.Produksi),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Jumlah Petani',
        data: DataKakaoIndonesia.map((item) => item.Jumlah_Petani),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Perkebunan Rakyat',
        data: DataKakaoIndonesia.map((item) => item.PR),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Perkebunan Negara',
        data: DataKakaoIndonesia.map((item) => item.PBN),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Perkebunan Swasta',
        data: DataKakaoIndonesia.map((item) => item.PS),
        backgroundColor: '#2196f3',
        borderColor: '#2280ff',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Belum Matang',
        data: DataKakaoIndonesia.map((item) => item.TBM),
        backgroundColor: '#f9bf40',
        borderColor: '#ffdc41',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Matang',
        data: DataKakaoIndonesia.map((item) => item.TM),
        backgroundColor: '#70f3ac',
        borderColor: '#4aa78e',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Rusak',
        data: DataKakaoIndonesia.map((item) => item.TR),
        backgroundColor: '#e91e63',
        borderColor: '#ff204e',
        borderWidth: 1,
      },
    ],
  });

  const [lineChartKakaoIndo] = useState({
    labels: DataKakaoIndonesia.map((item) => item.Luas_Areal),
    datasets: [
      {
        data: DataKakaoIndonesia.map((item) => item.Luas_Areal),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        label: 'Luas_Areal',
      },
    ],
  });

  const [lineChartProduksi] = useState({
    labels: DataKakaoIndonesia.map((item) => item.Year),
    datasets: [
      {
        label: 'Produksi',
        data: DataKakaoIndonesia.map((item) => item.Produksi),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [lineChartKeadaanTanaman] = useState({
    labels: DataKakaoIndonesia.map((item) => item.Year),
    datasets: [
      {
        label: 'Tanaman Belum Matang',
        data: DataKakaoIndonesia.map((item) => item.TBM),
        backgroundColor: '#f9bf40',
        borderColor: '#ffdc41',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Matang',
        data: DataKakaoIndonesia.map((item) => item.TM),
        backgroundColor: '#70f3ac',
        borderColor: '#4aa78e',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Rusak',
        data: DataKakaoIndonesia.map((item) => item.TR),
        backgroundColor: '#e91e63',
        borderColor: '#ff204e',
        borderWidth: 1,
      },
    ],
  });

  const [lineCahrtKepemilikanLahan] = useState({
    labels: DataKakaoIndonesia.map((item) => item.Year),
    datasets: [
      {
        label: 'Perkebunan Rakyat',
        data: DataKakaoIndonesia.map((item) => item.PR),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Perkebunan Besar Negara',
        data: DataKakaoIndonesia.map((item) => item.PBN),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Perkebunan Swasta',
        data: DataKakaoIndonesia.map((item) => item.PS),
        backgroundColor: '#2196f3',
        borderColor: '#2280ff',
        borderWidth: 1,
      },
    ],
  });

  const options = {
    responsive: true,
  };

  const handleChange = (val: number) => {
    if (val === 1) {
      if (flagLuasAreal < 3) {
        setFlagLuasAreal(flagLuasAreal + 1);
      } else if (flagLuasAreal === 3) {
        setFlagLuasAreal(1);
      }
    } else if (val === 2) {
      if (flagProduksi < 3) {
        setFlagProduksi(flagProduksi + 1);
      } else if (flagProduksi === 3) {
        setFlagProduksi(1);
      }
    } else if (val === 3) {
      if (flagTanaman < 3) {
        setFlagTanaman(flagTanaman + 1);
      } else if (flagTanaman === 3) {
        setFlagTanaman(1);
      }
    } else if (val === 4) {
      if (flagKepemilikanLahan < 2) {
        setFlagKepemilikanLahan(flagKepemilikanLahan + 1);
      } else if (flagKepemilikanLahan === 2) {
        setFlagKepemilikanLahan(1);
      }
    }
  };

  console.log(lineCahrtKepemilikanLahan);

  return (
    <Fragment>
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-10 mx-5'>
        <ChartBar
          titleOfChart={'Komoditas Kakao Indonesia'}
          dataOfChart={barChartKakaoIndo}
          options={options}
        />
      </div>
      <p className='text-center'>
        <cite>
          Dari grafik diatas berikut adalah Variable yang memiliki korelasi dan
          sangat berpengaruh terhadap Perkembangan Komoditas Kakao di Indonesia
        </cite>
      </p>

      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 px-2 mt-10'>
        <div className='p-3'>
          <ChartLine
            dataOfChart={lineChartKakaoIndo}
            titleOfChart={'Perkembangan Luas Areal Kakao'}
            options={options}
          />
        </div>
        <div
          className='p-3 shadow shadow-slate-300 rounded flex flex-col justify-center align-middle cursor-pointer hover:bg-[#fdfae7] transition-all duration-150'
          onClick={() => {
            handleChange(1);
          }}
        >
          <br />
          {flagLuasAreal === 1 ? (
            <p className='text-center'>
              Pada setiap tahun Luas Areal Kakao di Indonesia mengalami
              penurunan yang cukup signifikan
            </p>
          ) : flagLuasAreal === 2 ? (
            <p className='text-center'>
              kenaikan hanya terjadi sekali pada tahun 2014 - 2015 sebesar{' '}
              <b>11.489 (Ha)</b> sedangkan untuk penurunan terbesar terjadi pada
              tahun 2016 - 2017 sebesar <b>62.369 (Ha)</b> sungguh sangat ironis
              penurunan lebih besar dari pada kenaikan,{' '}
            </p>
          ) : (
            <p className='text-center'>
              Penurunan ini disebabkan beberapa hal seperti alih{' '}
              <mark>
                Alih fungsi lahan, luas areal berkurang, tanaman tidak
                produktif, terbatasnya penyuluhan dan pelatihan serta kurangnya
                akses terhadap teknologi
              </mark>{' '}
              menjadi permasalahan utama pada sektor komoditas kakao hal ini
              akan berimbas kepada Produksi
            </p>
          )}
        </div>
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 px-2 mt-10'>
        <div className='p-3'>
          <ChartLine
            dataOfChart={lineChartProduksi}
            titleOfChart={'Perkembangan Produksi Kakao'}
            options={options}
          />
        </div>
        <div
          className='p-3 shadow shadow-slate-300 rounded flex flex-col justify-center align-middle cursor-pointer hover:bg-[#fdfae7] transition-all duration-150'
          onClick={() => {
            handleChange(2);
          }}
        >
          {flagProduksi === 1 ? (
            <>
              <br />
              <p className='text-center'>
                Setiap tahunnya Produksi kakao mengalami kenaikan dan penurunan
                <i> ( Fluktuatif )</i> hal ini disebabkan oleh Luas Areal Kakao
                dan juga beberapa faktor yang mempengaruhinya seperti...
              </p>
            </>
          ) : flagProduksi === 2 ? (
            <ul className='mx-4 text-left'>
              <li>
                <mark>Tanaman Belum Matang (TBM):</mark> adalah tanaman yang
                sampai pada saat pengamatan belum pernah memberikan hasil,
                karena masih muda atau tanaman sudah cukup umur tetapi belum
                dapat menghasilkan karena tidak cocok iklim, ketinggian tempat,
                kondisi tanah dan sebagainya.
              </li>
              <li className='my-3'>
                <mark className='bg-green-500'>Tanaman Matang (TM): </mark>{' '}
                adalah tanaman yang sebelum saat pengamatan pernah memberikan
                hasil dan masih akan memberikan hasil, meskipun pada saat
                pengamatan sedang tidak menghasilkan.
              </li>
              <li>
                <mark className='bg-red-500'>Tanaman Rusak (TR): </mark>adalah
                tanaman yang sampai dengan saat pengamatan tidak pernah
                memberikan hasil atau tidak akan memberikan hasil lagi
                disebabkan tua, rusak atau mandul
              </li>
            </ul>
          ) : (
            <p className='text-center'>
              Jika ditelisik lebih jauh setiap produksi mengalami penurunan
              <mark className='bg-red-500'>Tanaman Rusak (TR): </mark> atau{' '}
              <mark>Tanaman Belum Matang (TBM):</mark> akan mengalami kenaikan
              sehingga produktivitas pada suatu lahan akan menglami penurunan
              dan begitupun sebaliknya jika produksi mengalami kenaikan ( tahun
              2018 ) maka{' '}
              <mark className='bg-red-500'>Tanaman Rusak (TR): </mark> dan
              <mark>Tanaman Belum Matang (TBM):</mark>
              haruslah lebih rendah dari pada{' '}
              <mark className='bg-green-500'>Tanaman Matang (TM): </mark>.
            </p>
          )}
        </div>
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 px-2 mt-10'>
        <div className='p-3'>
          <ChartLine
            dataOfChart={lineChartKeadaanTanaman}
            titleOfChart={
              'Perkembangan Perkebunan kakao dengan kepemilikan Rakyat'
            }
            options={options}
          />
        </div>
        <div
          className='p-3 shadow shadow-slate-300 rounded flex flex-col justify-center align-middle cursor-pointer hover:bg-[#fdfae7] transition-all duration-150'
          onClick={() => {
            handleChange(3);
          }}
        >
          <br />
          {flagTanaman === 1 ? (
            <p className='text-center'>
              Tanaman kakao dapat mulai berbuah setelah 3 sampai dengan 5 tahun
              setelah masa tanam, tanaman kakao biasanya baru mencapai fase
              produktivitas maksimal setelah 5 sampai dengan 7 tahun setelah
              masa tanam.
            </p>
          ) : flagTanaman === 2 ? (
            <p className='text-center'>
              Fase produktivitas ini biasanya berlangsung sekitar 20 hingga 25
              tahun, selama masa ini tanaman akan menghasilkan buah - buahan
              yang cukup baik dan setelah masa produktivitas tanaman kakao akan
              mulai mengalami penurunan
            </p>
          ) : (
            <p className='text-center'>
              Dan pada akhirnya masuk ke dalam fase TM (tanaman tidak
              menghasilkan / tua / rusak) yang dapat berkisar antara 30-50 tahun
              setelah tanam.
            </p>
          )}
        </div>
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 px-2 mt-10'>
        <div className='p-3'>
          <ChartLine
            dataOfChart={lineCahrtKepemilikanLahan}
            titleOfChart={'Kepemilikan Lahan Perkebunan Kakao'}
            options={options}
          />
        </div>
        <div
          className='p-3 shadow shadow-slate-300 rounded flex flex-col justify-center align-middle cursor-pointer hover:bg-[#fdfae7] transition-all duration-150'
          onClick={() => {
            handleChange(4);
          }}
        >
          <br />
          {flagKepemilikanLahan === 1 ? (
            <p className='text-center'>
              Jika dilihat dengan seksama perkebunan kakao ini di dominasi oleh
              perkebunan dengan kepemilikan lahan rakyat sehingga pemerintah
              atau <i>stakeholder</i> terkait dapat...
            </p>
          ) : (
            <p className='text-center'>
              Memfokuskan program atau penyuluhan kepada pertanian atau
              perkebunan dengan kepemilikan rakyat untuk dapat mendongkrak
              produksi dengan cara memperbanyak Tanaman Matang (TM) dan menjaga
              Tanaman Rusak (TR) tetap rendah dengan menanam kembali
              (replanting) tanaman kakao menggunakan bibit unggul yang kementan
              miliki dan diberikan edukasi yang tepat.
            </p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CocoaSectionIndo;
