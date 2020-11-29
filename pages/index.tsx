import { useEffect, useState } from 'react';
import Head from 'next/head';
import Main from '../components/Main';

const Index = (): React.ReactElement => {
  const deviceType: string = useDeviceType();

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
  const [deviceType, setDeviceType] = useState<string>('desktop');

  useEffect(() => {
    function handleResize() {
      setDeviceType(window.innerWidth < 670 ? 'mobile' : 'desktop');
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}

export default Index;
