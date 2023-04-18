import CocoaSection from '@/Components/Cocoa/CocoaSection';
import DataSainsSection from '@/Components/Datasains/DataSainsSection';
import Footer from '@/Components/Footer';
import NavigationBar from '@/Components/Navigation';
import SigSection from '@/Components/Sig/SigSection';
import { Fragment } from 'react';

const LandingPage = () => {
  return (
    <Fragment>
      <NavigationBar flag={true} />
      <CocoaSection />
      <SigSection />
      <DataSainsSection />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
