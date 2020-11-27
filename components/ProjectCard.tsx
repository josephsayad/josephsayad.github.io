import { Image } from 'semantic-ui-react';

const ProjectCard = ({
  card: {
    asset: { src, type },
    id,
  },
}) => {
  let card = <></>;

  if (type.includes('image')) {
    card = (
      <Image className="project-card" draggable={false} key={id} src={src} />
    );
  } else if (type.includes('video')) {
    card = (
      <video
        className="project-card"
        draggable={false}
        key={id}
        autoPlay
        muted
        loop
      >
        <source src={src} type={type} />
      </video>
    );
  }

  return card;
};

export default ProjectCard;
