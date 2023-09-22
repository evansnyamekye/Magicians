import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="py-3 text-right px-3 bg-gray-800 text-white text-xl">{result}</div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
