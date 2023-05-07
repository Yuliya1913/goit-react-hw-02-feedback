import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  handleIncreaseGood,
  handleIncreaseNeutral,
  handleIncreaseBad,
}) => {
  return (
    <>
      <button onClick={handleIncreaseGood}>good</button>
      <button onClick={handleIncreaseNeutral}>neutral</button>
      <button onClick={handleIncreaseBad}>bad</button>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleIncreaseGood: PropTypes.func.isRequired,
  handleIncreaseNeutral: PropTypes.func.isRequired,
  handleIncreaseBad: PropTypes.func.isRequired,
};
