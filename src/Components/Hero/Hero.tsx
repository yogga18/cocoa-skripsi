import React from 'react';

const Hero = () => {
  return (
    <div className='container'>
      <div className='w-full h-50'>
        <header className='text-white py-16 text-center'>
          <h1 className='text-3xl font-bold'>New Revolution</h1>
          <p className='text-xl leading-relaxed font-light mt-4 mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            <a
              href='#'
              className='underline decoration-sky-500 text-sky-400 font-medium'
            >
              Dolorem quam
            </a>
            , recusandae quis dolorum veritatis nulla, nemo consequuntur
            temporibus quisquam expedita libero est facere ipsum laboriosam
            eveniet itaque. Rem, dicta temporibus?
          </p>
          <a
            href='#'
            className='bg-white hover:bg-gray-50 hover:text-blue-600 transition-all duration-300 text-gray-900 px-6 py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-400'
          >
            Browse
          </a>
        </header>
      </div>
    </div>
  );
};

export default Hero;
