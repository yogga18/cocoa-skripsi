import React, { Fragment } from 'react';
import ComponentTimeLine from './ComponentTimeLine';

const CocoaTimeLine = () => {
  return (
    <Fragment>
      <h5 className='text-center mt-10'>
        Perkembangan Komoditas Kakao dari Tahun ke Tahun
      </h5>
      <div className='h-full w-full flex justify-center items-center overflow-x-hidden my-10'>
        <div className='max-w-7xl mx-auto w-full grid grid-cols-9 px-2'>
          <ComponentTimeLine
            position={'left'}
            year={2014}
            path={'/cocoa/Cocoa_2014'}
          />
          <ComponentTimeLine
            position={'right'}
            year={2015}
            path={'/cocoa/Cocoa_2015'}
          />
          <ComponentTimeLine
            position={'left'}
            year={2016}
            path={'/cocoa/Cocoa_2016'}
          />
          <ComponentTimeLine
            position={'right'}
            year={2017}
            path={'/cocoa/Cocoa_2017'}
          />
          <ComponentTimeLine
            position={'left'}
            year={2018}
            path={'/cocoa/Cocoa_2018'}
          />
          <ComponentTimeLine
            position={'right'}
            year={2019}
            path={'/cocoa/Cocoa_2019'}
          />
          <ComponentTimeLine
            position={'left'}
            year={2020}
            path={'/cocoa/Cocoa_2020'}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CocoaTimeLine;
