import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            name={option}
            className={css.btn}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
