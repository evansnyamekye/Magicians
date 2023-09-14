import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="display">{result}</div>
  );
}

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.number,
};

export default Display;
