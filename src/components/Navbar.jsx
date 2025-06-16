import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-white py-4 flex items-center justify-center'>
      <div
        className='flex items-center gap-3
      
      
      
      '
      >
        <svg
          width='12'
          height='16'
          viewBox='0 0 12 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6 0L6 8' stroke='#212121' strokeWidth='2.5' />
          <path
            d='M1 5L6 9L11 5'
            stroke='#212121'
            strokeWidth='2.0'
            strokeLinejoin='bevel'
          />
          <circle cx='6' cy='14' r='2' fill='#212121' />
        </svg>
        <h1 className='font-semibold tracking-widest text-xl'>SPOTS</h1>
      </div>
    </div>
  );
};

export default Navbar;
