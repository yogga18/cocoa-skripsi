import React from 'react';
import Head from 'next/head';

interface MetaTag {
  title: string;
  desc: string;
}

const MetaTag = ({ title, desc }: MetaTag) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={desc} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default MetaTag;
