import CocoaSectionIndo from '@/Components/Cocoa/CocoaSectionIndo';
import CocoaTimeLine from '@/Components/Cocoa/CocoaTimeLine';
import CococaPages from '@/Components/Cocoa/CococaPages';
import Footer from '@/Components/Footer';
import MetaTag from '@/Components/Head';
import NavigationBar from '@/Components/Navigation';
import React, { Fragment } from 'react';

const Cocoa = () => {
  return (
    <Fragment>
      <MetaTag title='Cocoa' desc='Cocoa' />
      <NavigationBar flag={false} />
      <CococaPages />
      <CocoaSectionIndo />
      <CocoaTimeLine />
      <Footer />
    </Fragment>
  );
};

export default Cocoa;
