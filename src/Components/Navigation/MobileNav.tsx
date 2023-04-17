import React, { useState } from 'react';
import MobileNavLink from './MobileNavLink';

const MobileNav = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(!isOpen);
  };

  return (
    <div className='flex md:hidden justify-end items-center p-3 border-b border-gray-700'>
      <div
        onClick={handleOpen}
        className='bg-transparent absolute w-full h-full inset-0'
      ></div>
      <button className='focus:outline-none' onClick={handleOpen}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6 text-white'
        >
          <path
            fillRule='evenodd'
            d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {isOpen && (
        <div className='bg-white absolute right-0 mr-12 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden'>
          <MobileNavLink href={'/'}>Home</MobileNavLink>
          <MobileNavLink href={'/cocoa'}>Cocoa</MobileNavLink>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
