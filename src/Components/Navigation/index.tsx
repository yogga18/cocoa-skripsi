import React, { Fragment } from 'react';
import Hero from '../Hero/Hero';
import MobileNav from './MobileNav';
import NavLink from './NavLink';

interface NavigationBar {
  flag: boolean;
}

const NavigationBar = ({ flag }: NavigationBar) => {
  return (
    <Fragment>
      <div className='bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 h-100 w-full'>
        <MobileNav />
        <div className='hidden md:block border-b border-white/10 py-3'>
          <div className='container'>
            <nav className='flex items-center justify-center'>
              <div className='flex items-center gap-x-2'>
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/cocoa'}>Cocoa</NavLink>
                <NavLink href={'/datasains'}>Data Sains</NavLink>
              </div>
            </nav>
          </div>
        </div>
        {flag && <Hero />}
      </div>
    </Fragment>
  );
};

export default NavigationBar;
