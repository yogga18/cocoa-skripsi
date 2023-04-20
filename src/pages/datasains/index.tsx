import MetaTag from '@/Components/Head';
import NavigationBar from '@/Components/Navigation';
import React, { Fragment, useRef, useState } from 'react';

const DataSains = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleCklick = (event: any) => {
    event.preventDefault();
    const inputValue = ref.current?.value;
    console.log(inputValue);
  };

  console.log('ref', ref);

  return (
    <Fragment>
      <MetaTag title='Data Sains' desc='Data Sains' />
      <NavigationBar flag={false} />
      <p>DataSains</p>
      <form onSubmit={handleCklick}>
        <input type='text' placeholder='input Text 1' ref={ref} />

        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  );
};

export default DataSains;
