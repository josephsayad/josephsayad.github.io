import PropTypes from 'prop-types';

type Props = {
  classname: string;
  viewBoxMinX?: string;
  viewBoxHeight?: string;
  width: number;
  height?: string;
};

const Logo = ({
  classname,
  viewBoxMinX,
  viewBoxHeight,
  width,
  height,
}: Props): React.ReactElement => (
  <svg
    className={classname}
    width={width}
    height={height || '100'}
    viewBox={`${viewBoxMinX} 250 1052 ${viewBoxHeight}`}
  >
    <path
      d="M274.35 782.2l44.1-2.1h.7l35-9.1 46.9-30.8h.7l42-56.7 14-51.1v-2.1l-9.1-27.3 11.9-46.2v-.7l-7-30.8 4.2-81.2v-1.4l-4.2-46.2 9.1-51.1v-.7l-2.1-42v-.7h-.7c0-.7-.7-.7-.7 0h-.7l-88.2 4.2-51.1-7h-1.4v.7l9.1 119.7-7 46.9v.7l7 46.9-9.1 58.1v.7l4.9 67.2-41.3 30.1-42-7h-.7l-39.2-37.1h-1.4l-22.4 11.2c-.7 0-.7 0-1.4.7l-34.3 44.1-26.6 18.9v.7l23.8 31.5 74.9 39.2v.7l60.9 9.1h1.4zm108.5-434.7l-60.9-46.2 47.6 6.3 13.3 39.9zm-31.5 37.8l-10.5-27.3-20.3-55.3 63 46.9-32.2 35.7zm34.3-37.1l-9.8-27.3-4.2-12.6 84.7-4.9-70.7 44.8zm26.6 37.1l-26.6-35.7 70.7-44.1-44.1 79.8zm3.5-2.1l43.4-77.7 2.1 38.5-28 23.8-17.5 15.4zm-87.5 34.3l-8.4-111.3 10.5 28.7 19.6 51.8-21.7 30.8zm123.2-21.7l-37.1-9.1 25.9-22.4 19.6-16.8-8.4 48.3zm-93.1 31.5l26.6-75.6 25.9 35-39.2 30.1-13.3 10.5zm-1.4-2.1l-4.9-37.8 30.1-33.6-1.4 2.8-23.8 68.6zm51.1 24.5l4.9-61.6 12.6 2.8 24.5 6.3-42 52.5zm-2.1 1.4l-47.6-21.7 53.2-40.6-4.2 46.9-1.4 15.4zm-82.6 12.6l4.9-14 22.4-58.8 4.9 38.5-32.2 34.3zm-.7-4.9l6.3-38.5 15.4-22.4 3.5-4.2-20.3 51.8-4.9 13.3zm111.3 7l-25.9-13.3 42-52.5-7.7 32.9-8.4 32.9zm2.1-1.4l16.1-62.3 4.2 40.6-20.3 21.7zm-37.8 42.7l-76.3-40.6 34.3-35.7 36.4 65.1 5.6 11.2zm2.8-1.4l-14.7-25.9-26.6-47.6 23.8 10.5 22.4 10.5-4.9 52.5zm51.1 15.4l-2.8-9.1-13.3-44.8 18.9-20.3 1.4-1.4-4.2 75.6zm-49.7-15.4l4.9-51.1 25.9 12.6-30.8 38.5zm-73.5 7l-7-44.1 76.3 39.9-69.3 4.2zm121.8 11.2l-32.2-9.8-16.1-5.6 16.1-20.3 15.4-19.6 16.8 55.3zm-92.4 14.7l-28.7-23.8 68.6-4.9-5.6 4.2-34.3 24.5zm98 16.1l-95.2-15.4 40.6-29.4 54.6 44.8zm2.1-.7l-53.2-42.7 2.1.7 44.1 14.7 7 27.3zm-138.6 16.1l8.4-54.6 28.7 24.5-37.1 30.1zm60.2 17.5l-10.5-23.1-9.8-23.8 95.9 16.1-75.6 30.8zm-2.1 0l-57.4-15.4 37.1-30.8 15.4 34.3 4.9 11.9zm30.1 37.8l-26.6-35.7 75.6-31.5-49 67.2zm2.8-1.4l46.9-63.7-10.5 42-36.4 21.7zm-64.4 1.4l-26.6-51.1 58.1 15.4-31.5 35.7zm-22.4 14l-4.2-62.3 11.2 21.7 14 27.3-15.4 9.8-5.6 3.5zm30.1 26.6l23.8-67.2 2.1-7.7 26.6 35.7-52.5 39.2zm-2.1-1.4l-4.9-37.1 30.8-34.3-25.9 71.4zm103.6-34.3l-45.5-4.2 12.6-7.7 24.5-14 8.4 25.9zm-52.5 59.5l4.2-49.7 1.4-12.6 46.2 4.9-51.8 57.4zm-224.7 19.6l-2.1-70.7 21-10.5-18.9 81.2zm.7 3.5l20.3-84.7 37.8 35.7-36.4 30.8-21.7 18.2zm222.6-21.7l-48.3-22.4 53.2-39.9-2.8 30.8-2.1 31.5zm-77.7-9.8v-39.9l20.3-12.6-20.3 52.5zm.7 2.1l21-53.2 5.6 37.8-21.7 12.6-4.9 2.8zm80.5 7.7l27.3-30.8 23.1-25.9-13.3 47.6-37.1 9.1zm-228.2 22.4l-35.7-30.8 32.9-42 1.4 44.1 1.4 28.7zm145.6-29.4l-27.3-9.1-12.6-4.2 39.9-28.7v42zm-65.1 16.1l-17.5-35 39.2 6.3-10.5 14-11.2 14.7zm-45.5 70l-33.6-53.9 58.8-49.7-25.2 103.6zm2.8-2.8l12.6-53.9 11.2-46.9 18.2 35-42 65.8zm182.7-31.5l-72.8-50.4 27.3-15.4 45.5 65.8zm2.1 0l-45.5-65.1 46.9 22.4-1.4 42.7zm-140-35.7l4.9-7 16.1-21 39.9 13.3-60.9 14.7zm-85.4 14l-58.1-12.6 23.8-17.5 8.4 7.7 25.9 22.4zm227.5 22.4l.7-35 .7-8.4 37.8-9.1-39.2 52.5zm-5.6.7l-135.1-35.7 61.6-15.4 73.5 51.1zm-258.3-6.3l-21.7-28 58.1 13.3-20.3 8.4-16.1 6.3zm215.6 37.8l-91-65.1 136.5 35.7-45.5 29.4zm-80.5 11.9l-58.8-9.1 14-22.4 28.7-44.8 9.8 45.5 6.3 30.8zm1.4 0l-14.7-72.8-.7-2.8 11.2 14 46.2 59.5-42 2.1zm44.8-2.1l-56.7-72.1 89.6 63-32.9 9.1zm-108.5-8.4l-71.4-37.8 7.7-3.5 30.1-11.9 33.6 53.2zm546.7 9.8l58.1-16.1c.7 0 .7-.7.7-.7l70-51.1 16.8-7v-.7l7.7-115.5-.7-.7-51.1-67.2c0-.7-.7-.7-.7-.7l-11.2-11.9h-.7l-114.8-21-7-9.1-74.9-23.8 9.1-36.4 53.9-16.1 53.2 11.9h.7l61.6 36.4.7.7h.7l14.7-7 .7-.7 37.1-67.2 14-16.8v-.7l-60.9-44.8c0-.7 0-.7-.7-.7l-79.1-16.1-71.4-2.8s0 .7-.7.7l-105 23.1c-.7 0-.7.7-.7.7l-2.1 15.4-42 49.7s-.7 0-.7.7l-7 25.9v.7l2.8 95.2c-.7.7 0 .7 0 1.4l58.8 49 84.7 35.7 51.8 7 4.2 6.3v.7l53.2 27.3-15.4 32.2-56 4.2-74.9-9.1-63-44.8h-1.4l-53.2 46.9s-.7 0-.7.7l-11.9 41.3 10.5 20.3.116.116.584.584h.7l17.5-2.1 48.3 39.2c0 .7.7.7.7.7l88.2 16.1h86.1zm-99.4-452.9l-74.2-8.4 98-22.4-15.4 20.3-8.4 10.5zm41.3 19.6l-7-25.2-7-25.2 67.2 2.1-6.3 6.3-46.9 42zm-1.4 0l-38.5-18.9 24.5-30.8 10.5 37.8 3.5 11.9zm4.2 0l52.5-47.6 19.6 35.7-72.1 11.9zm130.9-4.9l-73.5-42 74.2 14.7v9.1l-.7 18.2zm-3.5 0l-53.9-7-18.9-34.3 72.8 41.3zm61.6 14.7l-56.7-14v-9.1l.7-17.5 56 40.6zm-314.3-22.4l2.1-14.7 69.3 8.4-71.4 6.3zm55.3 35l-53.9-32.9 77.7-7-23.8 39.9zm2.1 0l24.5-39.9 37.1 18.9-61.6 21zm-98.7 14.7l39.9-47.6 53.9 33.6-93.8 14zm294.7-5.6l-38.5-30.8-13.3-10.5 54.6 7-.7 11.9-2.1 22.4zm-88.2-10.5l-35-16.8-4.2-2.1 70-11.9-30.8 30.8zm49.7 23.1l-47.6-22.4 30.8-31.5 8.4 27.3 8.4 26.6zm2.1 0l-16.8-52.5 51.8 42-11.9 3.5-23.1 7zm37.8-11.2l1.4-17.5 1.4-18.2 58.1 14.7-60.9 21zm-109.2 4.9l-21-34.3 39.2 18.9-18.2 15.4zm-64.4 31.5l-24.5-44.8 63.7-21-39.2 65.8zm2.8-.7l25.9-43.4 12.6-21.7 21.7 35.7-30.1 14.7-30.1 14.7zm177.1-36.4l55.3-18.2-12.6 14-42.7 4.2zm-73.5 31.5l-40.6-24.5 18.2-16.1 17.5 31.5 4.9 9.1zm2.1 1.4l-21.7-40.6 46.2 21-11.9 9.8-12.6 9.8zm-119 41.3l-111.3-67.9 95.2-14 16.1 81.9zm196.7-11.9l-12.6-60.2 48.3-4.9-35.7 65.1zm-195.3 9.8l-4.2-22.4-9.8-52.5 22.4 42-8.4 32.9zm193.2-10.5l-47.6-48.3 12.6-3.5 23.1-7 11.9 58.8zm-249.2 65.1l-57.4-119 112 68.6-54.6 50.4zm168.7-94.5l-48.3-10.5 4.9-7 4.2-6.3 39.2 23.8zm-176.4 83.3l-57.4-84 6.3-23.1 51.1 107.1zm82.6-80.5l51.8-25.9-1.4 2.8-7 9.8-43.4 13.3zm158.9 34.3l-58.8-35.7 9.8-7.7 15.4-11.2 33.6 54.6zm3.5 1.4l-32.2-51.8 4.2 4.2 39.9 41.3-11.9 6.3zm-239.4 56h-60.9l-2.1-91.7 63 91.7zm99.4 2.1l-39.2-51.1 71.4 22.4-32.2 28.7zm-38.5 11.9l-57.4-13.3 53.9-49 2.1 41.3 1.4 21zm1.4-.7l-1.4-20.3-2.1-40.6 39.2 50.4-12.6 3.5-23.1 7zm43.4-14.7l23.8-21 3.5-3.5 6.3 7.7-33.6 16.8zm64.4 5.6l-26.6-20.3 103.6 18.9-77 1.4zm-21 21l-47.6-21.7 38.5-19.6 9.1 41.3zm1.4-.7l-9.1-39.9 18.2 14 9.1 7-18.2 18.9zM586.55 554l-55.3-46.2h60.2l-4.9 46.2zm2.1.7l2.8-31.5 1.4-15.4 56.7 12.6-60.9 34.3zm117.6 7.7l-51.8-42 35.7-10.5 16.1 52.5zm149.1-42.7l-78.4-8.4 68.6-1.4 9.8 9.8zm-147 43.4l-16.8-52.5 47.6 21.7-30.8 30.8zm76.3-11.9l-18.9-32.2-3.5-7 91.7 9.1-69.3 30.1zm-2.8-.7l-39.9-18.9 18.9-18.9 21 37.8zm-110.6 6.3l-80.5-1.4 60.9-33.6 16.8 30.1 2.8 4.9zm236.6 30.8l-70-11.2 10.5-27.3 9.8-26.6 49.7 65.1zm-72.1-11.9l-49.7-23.1 70-30.1-20.3 53.2zm-131.6-11.9l-30.8-7-17.5-32.2 48.3 39.2zm6.3 0l30.8-30.8 39.9 18.9-70.7 11.9zm95.9 44.8l-21-54.6 49.7 23.8-28.7 30.8zm-1.4.7l-73.5-4.9 52.5-50.4 10.5 27.3 10.5 28zm-80.5-11.9l-15.4-31.5 71.4-11.9-42 32.2-14 11.2zm-53.2-7l-79.1-33.6 79.8 1.4-.7 16.1v16.1zm49.7 4.2l-44.8-35.7 30.8 7 14 28.7zm0 2.8l-47.6-7v-30.8l47.6 37.8zm7.7 7l-3.5-5.6 45.5-35-42 40.6zm131.6 73.5l-11.2-49.7-11.2-49.7 70.7 11.2-42 77.7-6.3 10.5zm-2.1-.7l-51.1-66.5 15.4-16.8 13.3-14.7 22.4 98zm43.4 25.9l-39.9-22.4 37.1-70 9.8-18.2-7 110.6zm-119-70.7l-49.7-25.9 71.4 4.2-21.7 21.7zm74.2 45.5l-72.8-44.1 22.4-22.4 50.4 66.5zm-281.4-6.3l-.7-13.3-2.8-39.2 53.9 51.1-50.4 1.4zm-2.1 0l-53.2-7.7 50.4-44.8 2.8 52.5zm54.6-1.4l-48.3-46.2 53.9 37.8-2.8 4.2-2.8 4.2zm228.2 9.1l-88.9-13.3 16.1-30.8 72.8 44.1zm-159.6-9.1h-66.5l5.6-7.7 60.9 7.7zm-179.2 53.2l.7-43.4v-14.7l53.9 7.7-54.6 50.4zm256.9-3.5l-44.1-33.6-18.2-14.7 53.9-4.2 8.4 52.5zm2.1 2.1l-4.9-27.3-4.2-27.3 89.6 14-80.5 40.6zm-261.1 0l-9.1-16.8 10.5-34.3-.7 32.9-.7 18.2zm135.8-32.9l-15.4-11.9-5.6-4.9h73.5l-52.5 16.8zm-3.5-.7l-64.4-14.7 44.1-1.4 20.3 16.1zm125.3 33.6l-100.8-7 37.8-42.7 63 49.7zm-102.9-7.7l-9.1-11.9-8.4-11.9 39.2-12.6 14.7-4.9-36.4 41.3zm-86.1 47.6l-2.1-21.7-6.3-65.8 72.1 70.7-63.7 16.8zm-2.1-.7l-46.9-38.5 13.3-16.1 25.9-32.2 7.7 86.8zm67.2-17.5l-70.7-69.3 59.5 13.3 12.6 2.8-.7 17.5-.7 35.7zm-130.2-19.6l46.2-42-31.5 39.9-14.7 2.1zm299.6 35.7l15.4-28.7 26.6-49 24.5 28.7-66.5 49zm-2.8 2.1l-38.5-38.5 81.2-40.6-42.7 79.1zm70.7-51.8l-21.7-25.9 35.7 19.6-14 6.3zm-235.2 32.2v-25.2l.7-24.5 3.5 4.9 14 18.9-18.2 25.9zm22.4 35.7l-1.4-30.8-1.4-30.1 58.1 3.5 43.4 3.5-98.7 53.9zm-2.1-1.4l-20.3-31.5 18.2-26.6 1.4 28.7.7 29.4zm84.7 2.1h-80.5l98.7-53.9-18.2 53.9zm2.1-.7l18.2-53.2 37.8 37.8-56 15.4zm-88.9 0l-81.9-15.4 28.7-7.7 32.9-8.4 20.3 31.5z"
      stroke="#ffffff"
      strokeWidth="5px"
      fill="#292929"
    />
  </svg>
);

Logo.propTypes = {
  classname: PropTypes.string.isRequired,
  viewBoxMinX: PropTypes.string,
  viewBoxHeight: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
};

Logo.defaultProps = {
  viewBoxMinX: '0',
  viewBoxHeight: '550',
  height: null,
};

export default Logo;