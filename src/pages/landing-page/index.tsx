import CocoaSection from '@/Components/Cocoa/CocoaSection';
import DataSainsSection from '@/Components/Datasains/DataSainsSection';
import Footer from '@/Components/Footer';
import MetaTag from '@/Components/Head';
import NavigationBar from '@/Components/Navigation';
import SigSection from '@/Components/Sig/SigSection';
import { Fragment } from 'react';

const LandingPage = () => {
  return (
    <Fragment>
      <MetaTag title='Home' desc='Home' />
      <NavigationBar flag={true} />
      <CocoaSection />
      <SigSection />
      <DataSainsSection />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
