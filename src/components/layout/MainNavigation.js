import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";

export default function MainNavigation() {
  const favoriteCtx = useContext(FavoriteContext);

  return (
    <div className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/favorites">My favourites</Link>
          <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
        </li>
        <li>
          <Link to="/newmeetups">Add new meetups</Link>
        </li>
      </ul>
    </div>
  );
}
