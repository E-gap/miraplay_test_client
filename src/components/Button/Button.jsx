import PropTypes from 'prop-types';
import css from './Button.module.css';
import { FiLogOut } from 'react-icons/fi';

const Button = ({ text, handleButton, view }) => {
  const style = css[view];

  return (
    <button type="button" className={style} onClick={handleButton}>
      {text}
      {view === 'logOut' && <FiLogOut className={css.logOutIcon} />}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  handleButton: PropTypes.func,
};
