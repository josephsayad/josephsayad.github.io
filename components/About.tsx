import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

type Props = {
  interests: string[];
  windowWidth: Nullable<number>;
};

const About = ({ interests, windowWidth }: Props): React.ReactElement => {
  const [typing, setTyping] = useState<boolean>(true);
  const avgTypingDelay: number = 80;
  const backSpaceDelay: number = 15000;
  const beforeTypingDelay: number = 80;

  useEffect(() => {
    if (!typing) setTyping(true);
  }, [typing]);

  const resetTyping = () => setTyping(false);

  return (
    <div id="about">
      <div id="intro">
        <h2>Joseph Sayad.</h2>
        <h3>
          Software engineer with a focus in data engineering
          {windowWidth && windowWidth >= 1175 ? <br /> : null} and full stack
          web development.
        </h3>
      </div>
      <div id="interests">
        <div style={{ display: 'inline-block' }}>
          {typing ? (
            <Typist avgTypingDelay={avgTypingDelay} onTypingDone={resetTyping}>
              <span>I enjoy </span>
              {interests.flatMap((interest, index) => [
                <span key={interest} style={{ opacity: 1 }}>
                  {interest}
                </span>,
                <Typist.Backspace
                  key={`${interest}-backspace`}
                  count={interest.length}
                  delay={backSpaceDelay}
                />,
                <Typist.Delay
                  key={`${interest}-delay`}
                  ms={beforeTypingDelay}
                />,
              ])}
            </Typist>
          ) : null}
        </div>
      </div>
      <a
        className="button"
        id="contact-button"
        href="mailto:josephsayad95@gmail.com"
      >
        Get in Touch
      </a>
      <a className="button" id="resume-button" href="/resume.pdf">
        Resume
      </a>
    </div>
  );
};

About.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.string),
  windowWidth: PropTypes.number,
};

About.defaultProps = {
  interests: [
    'building ETL pipelines with Pandas, Dask, and Dagster.',
    'building full stack web applications.',
    'writing well-documented code.',
    'leveraging test-driven development.',
  ],
};

export default About;
