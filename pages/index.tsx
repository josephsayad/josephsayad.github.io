import { useEffect, useState } from 'react';
import Head from 'next/head';
import Main from '../components/Main';

const Index = () => {
  const deviceType = useDeviceType();

  return (
    <div>
      <Head>
        <title>Joseph Sayad</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto|Lato"
        />
      </Head>
      <Main deviceType={deviceType} />
    </div>
  );
};

function useDeviceType() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    deviceType: 'desktop',
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        deviceType: (window.innerWidth < 670 && 'mobile') || 'desktop',
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize.deviceType;
}

export default Index;
