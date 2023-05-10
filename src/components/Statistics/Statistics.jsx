import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      {total ? (
        <div className={css.text}>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>
            Total:
            {total}
          </p>
          <p>
            Positive feedback:
            {positiveFeedback}%
          </p>
        </div>
      ) : (
        <p className={css.text}>No feedback given </p>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
