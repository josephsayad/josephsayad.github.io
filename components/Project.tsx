import Carousel from 'react-multi-carousel';
import { Image } from 'semantic-ui-react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibility: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibility: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibility: 30,
  },
};

const Project = ({ deviceType, projectCards }) => (
  <Carousel
    ssr
    partialVisbile
    deviceType={deviceType}
    itemClass="image-item"
    responsive={responsive}
  >
    {projectCards.map(({ asset: { src, type }, id }) => {
      return type.includes('image') ? (
        <Image
          key={id}
          draggable={false}
          style={{ width: '100%', height: '100%' }}
          src={src}
        />
      ) : (
        <video
          key={id}
          autoPlay
          muted
          loop
          style={{ width: '100%', height: '100%', backgroundColor: '#000' }}
        >
          <source src={src} type={type} />
        </video>
      );
    })}
  </Carousel>
);

export default Project;
