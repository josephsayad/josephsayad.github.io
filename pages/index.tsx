import { useEffect, useState } from 'react';
import Head from 'next/head';
import Main from '../components/Main';

const Index = (): React.ReactElement => {
  const deviceDetail: DeviceDetail = useDeviceDetail();

  return (
    <div>
      <Head>
        <title>Joseph Sayad</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,700"
        />
      </Head>
      <Main deviceDetail={deviceDetail} />
    </div>
  );
};

function useDeviceDetail() {
  const [deviceDetail, setDeviceDetail] = useState<DeviceDetail>({
    type: 'desktop',
    windowWidth: null,
  });

  useEffect(() => {
    function handleResize() {
      setDeviceDetail({
        type: window.innerWidth < 670 ? 'mobile' : 'desktop',
        windowWidth: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceDetail;
}

export default Index;
