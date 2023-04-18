import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white mt-10 w-full h-36 shadow dark:bg-gray-800'>
      <div className='flex flex-col justify-center align-middle items-center w-full h-full gap-2'>
        <p className='text-gray-600 dark:text-gray-400 text-sm'>
          © 2023 - Made with ❤️ by{' '}
          <a
            href='https://www.linkedin.com/in/yogga-aditya-candra-20a0841a8/'
            className='text-blue-600 dark:text-blue-400'
            target='_blank'
            rel='noreferrer noopener'
          >
            @yoggaac,
          </a>{' '}
          You Can Find Me...{' '}
        </p>
        <p className='text-gray-600 dark:text-gray-400 text-sm'>
          <Link
            href={'https://github.com/yogga18'}
            className='text-blue-600 dark:text-blue-400'
            target='_blank'
            rel='noreferrer noopener'
          >
            Github
          </Link>
        </p>
        <p className='text-gray-600 dark:text-gray-400 text-sm'>
          <Link
            href={'https://medium.com/@yoggacandra'}
            className='text-blue-600 dark:text-blue-400'
            target='_blank'
            rel='noreferrer noopener'
          >
            Medium
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
