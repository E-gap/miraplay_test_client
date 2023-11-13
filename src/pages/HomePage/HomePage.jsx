import css from "./HomePage.module.css";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllGames } from "../../redux/games/gamesOperations";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  return (
    <section className={css.homePage}>
      <Container>
        <h1 className={css.headlineHome}>GAMES</h1>
      </Container>
    </section>
  );
};

export default HomePage;
