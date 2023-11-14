import css from "./OneGame.module.css";

const OneGame = ({ game }) => {
  return (
    <>
      <li className={css.oneGame}>
        <img
          src={game.gameImage}
          alt="poster game"
          className={css.oneGame_poster}
        />
        <div className={css.oneGame_text}>
          <h2 className={css.oneGame_headline}>{game.commonGameName}</h2>
          <p className={css.oneGame_description}>{game.gameDescription}</p>
        </div>
        <ul className={css.oneGame_characteristics}>
          <li className={css.oneGame_genre}>{game.genre}</li>
          {game.inTop && <li className={css.oneGame_top}>TOP</li>}
        </ul>
      </li>
    </>
  );
};

export default OneGame;
