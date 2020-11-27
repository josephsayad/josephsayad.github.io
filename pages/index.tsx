import Head from 'next/head';
import React, { Fragment } from 'react';
import UAParser from 'ua-parser-js';
import Main from '../components/Main';

const Index = ({ deviceType }) => {
  return (
    <div>
      <Head>
        <title>Joseph Sayad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
};

Index.getInitialProps = ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const parser = new UAParser();

  parser.setUA(userAgent);

  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';

  return { deviceType };
};

export default Index;
