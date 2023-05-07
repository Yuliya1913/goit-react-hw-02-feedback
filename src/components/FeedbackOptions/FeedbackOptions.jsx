import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({
  handleIncreaseGood,
  handleIncreaseNeutral,
  handleIncreaseBad,
}) => {
  return (
    <>
      <button className={css.btn} onClick={handleIncreaseGood}>
        good
      </button>
      <button className={css.btn} onClick={handleIncreaseNeutral}>
        neutral
      </button>
      <button className={css.btn} onClick={handleIncreaseBad}>
        bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleIncreaseGood: PropTypes.func.isRequired,
  handleIncreaseNeutral: PropTypes.func.isRequired,
  handleIncreaseBad: PropTypes.func.isRequired,
};
