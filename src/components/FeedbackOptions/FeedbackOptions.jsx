import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button name="good" className={css.btn} onClick={onLeaveFeedback}>
        good
      </button>
      <button name="neutral" className={css.btn} onClick={onLeaveFeedback}>
        neutral
      </button>
      <button name="bad" className={css.btn} onClick={onLeaveFeedback}>
        bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
