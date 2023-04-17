import Link from 'next/link';
import React from 'react';

interface MobileNavLinkProps {
  href: string;
  children?: React.ReactNode;
}

const MobileNavLink = ({ href, children }: MobileNavLinkProps) => {
  return (
    <div>
      <Link
        href={href}
        className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'
      >
        {children}
      </Link>
    </div>
  );
};

export default MobileNavLink;
