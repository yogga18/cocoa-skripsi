import CocoaSectionIndo from '@/Components/Cocoa/CocoaSectionIndo';
import CococaPages from '@/Components/Cocoa/CococaPages';
import NavigationBar from '@/Components/Navigation';
import React, { Fragment } from 'react';

const Cocoa = () => {
  return (
    <Fragment>
      <NavigationBar flag={false} />
      <CococaPages />
      <CocoaSectionIndo />
    </Fragment>
  );
};

export default Cocoa;
