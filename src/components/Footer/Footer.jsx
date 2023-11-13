import css from './Footer.module.css';
import Container from 'components/Container/Container';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';

const Footer = () => {
  return (
    <>
      <footer className={css.footer}>
        <Container>
          <div className={css.displayFlex}>
            <NavLink to="/" className={css.logo}>
              <img src={logo} alt="" className={css.logoImage} />
            </NavLink>
            <ul className={css.displayFlex}>
              <li>Contacts:</li>
              <li>+38(093)123-45-67</li>
              <li>+38(097)123-45-67</li>
              <li>+38(050)123-45-67</li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
