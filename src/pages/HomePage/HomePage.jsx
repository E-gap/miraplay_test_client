import css from "./HomePage.module.css";
import Container from "../../components/Container/Container";

const HomePage = () => {
  return (
    <section className={css.homePage}>
      <Container>
        <h1 className={css.headlineHome}>GAMES</h1>
      </Container>
    </section>
  );
};

export default HomePage;
