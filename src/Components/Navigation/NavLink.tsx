import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  href: string;
  children?: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <div>
      <Link
        href={href}
        className='px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg'
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
