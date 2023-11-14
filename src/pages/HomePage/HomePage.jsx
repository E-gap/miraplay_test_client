import css from "./HomePage.module.css";
import Container from "../../components/Container/Container";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getAllGames } from "../../redux/games/gamesOperations";
import OneGame from "../../components/OneGame/OneGame";
import { useSelector } from "react-redux";
import { selectAllGames } from "../../redux/selectors";
import { selectTotalGames } from "../../redux/selectors";
import { genres } from "../../utils/genres";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const [activeGenre, setActiveGenre] = useState("ALL");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("first old");
  const dispatch = useDispatch();
  const allGames = useSelector(selectAllGames);
  const totalGames = useSelector(selectTotalGames);

  useEffect(() => {
    const dataQuery = { activeGenre, page, sortBy };
    dispatch(getAllGames(dataQuery));
  }, [dispatch, page, activeGenre, sortBy]);

  const handleClickFilter = (e) => {
    setActiveGenre(e.target.textContent);
  };

  const numberPageUp = () => {
    setPage(page + 1);
  };

  const changeSortBy = () => {
    if (sortBy === "first old") {
      setSortBy("first new");
    } else {
      setSortBy("first old");
    }
  };

  const showButtonMore = allGames.length !== totalGames;

  return (
    <section className={css.homePage}>
      <Container>
        <h1 className={css.headlineHome}>GAMES</h1>
        <div className={css.displayFlex}>
          <ul className={css.filterPanel}>
            {genres.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={handleClickFilter}
                  className={item === activeGenre ? css.activeG : undefined}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <div className={css.sort}>
            <p className={css.sortText}>Sort by:</p>
            <p className={css.sortVariant} onClick={changeSortBy}>
              {sortBy}
            </p>
          </div>
        </div>

        {allGames.length > 0 ? (
          <ul className={css.gamesList}>
            {allGames.map((game) => {
              return <OneGame key={game._id} game={game} />;
            })}
          </ul>
        ) : (
          <p className={css.noItems}>There are not any games in this genre</p>
        )}

        {showButtonMore && (
          <Button
            text="Show more"
            view="show_more"
            handleButton={numberPageUp}
          />
        )}
      </Container>
    </section>
  );
};

export default HomePage;
