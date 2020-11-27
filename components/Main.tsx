import { useState } from 'react';
import Navbar from './Navbar';
import Project from './Project';
import ProjectsJson from '../json/projects.json';
import { Segment } from 'semantic-ui-react';

const ActiveElem = ({ activeView }) => {
  switch (activeView) {
    case 'projects':
      return (
        <div>
          {ProjectsJson.map(({ cards, description, id, title }) => (
            <Segment className="project-container">
              <Project key={id} projectCards={cards} />
              <div className="project-container-text">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Segment>
          ))}
        </div>
      );
    case 'work':
      return <div />;
    case 'resume':
      return <div />;
    default:
      return <div />;
  }
};

const Main = () => {
  const [activeView, setActiveView] = useState('projects');

  return (
    <main>
      <Navbar />
      <div className="main-container">
        <ActiveElem activeView={activeView} />
      </div>
    </main>
  );
};

export default Main;
