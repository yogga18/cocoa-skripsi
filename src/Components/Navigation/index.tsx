import React, { Fragment } from 'react';
import Hero from '../Hero/Hero';
import MobileNav from './MobileNav';
import NavLink from './NavLink';

const NavigationBar = () => {
  return (
    <Fragment>
      <div className='bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'>
        <MobileNav />
        <div className='hidden md:block border-b border-white/10 py-3'>
          <div className='container'>
            <nav className='flex items-center justify-center'>
              <div className='flex items-center gap-x-2'>
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/cocoa'}>Cocoa</NavLink>
              </div>
            </nav>
          </div>
        </div>
        <Hero />
      </div>
    </Fragment>
  );
};

export default NavigationBar;
