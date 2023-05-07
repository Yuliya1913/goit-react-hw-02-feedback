import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {children}
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
