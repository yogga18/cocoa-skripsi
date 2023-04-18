import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div
      className='container'
      style={{
        height: '100vh',
      }}
    >
      <div className='w-full h-full'>
        <header className='text-white pt-32 text-center'>
          <h1 className='text-3xl font-bold'>
            Mapping Potential Areas for Cocoa Commodities Using the K-Means
            Clustering Method
          </h1>
          <p className='text-xl leading-relaxed font-light mt-4 mb-6'>
            This study provides an overview for grouping regions with{' '}
            <mark className='font-medium bg-yellow-500'>Bad Potential</mark> and{' '}
            <mark className='font-medium bg-green-500'>Good Potential</mark>{' '}
            based on mapping with the hope that these areas will be given the
            right program or counseling according to their potential.
          </p>
          <Link
            href='/cocoa'
            className='bg-white hover:bg-gray-50 hover:text-blue-600 transition-all duration-300 text-gray-900 px-6 py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-400'
          >
            Browse
          </Link>
        </header>
      </div>
    </div>
  );
};

export default Hero;
