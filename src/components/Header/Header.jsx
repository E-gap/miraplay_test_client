import css from "./Header.module.css";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLogin, selectUserName } from "../../redux/selectors";
import { logout } from "../../redux/auth/authOperations";
import Container from "../Container/Container";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLogin);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleHeaderButton = (e) => {
    if (e.target.getAttribute("class").includes("Up")) {
      navigate("/register");
    } else if (e.target.getAttribute("class").includes("In")) {
      navigate("/login");
    } else if (e.target.getAttribute("class").includes("Out")) {
      dispatch(logout());
    }
  };

  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.displayFlex}>
            <div className={css.displayFlex}>
              <NavLink className={css.link} to="/">
                MiraPlay
              </NavLink>
            </div>
            {!isLogin && (
              <div className={css.header_buttons}>
                <Button
                  text="Sign In"
                  handleButton={handleHeaderButton}
                  view="signIn"
                />
                <Button
                  text="Sign Up"
                  handleButton={handleHeaderButton}
                  view="signUp"
                />
              </div>
            )}
            {isLogin && (
              <div className={css.displayFlex}>
                <p className={css.userName}>{userName}</p>
                <Button
                  text="Log out"
                  handleButton={handleHeaderButton}
                  view="logOut"
                />
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
