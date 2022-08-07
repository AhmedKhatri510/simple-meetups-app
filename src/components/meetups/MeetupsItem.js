import Card from "../ui/Card";
import classes from "./MeetupsItem.module.css";
import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";

export default function MeetupsItem(props) {
  const favoriteCtx = useContext(FavoriteContext);
  const isFav = favoriteCtx.itemIsFavorite(props.id);
  console.log(favoriteCtx.favorites);
  console.log(isFav);
  function toggleFavoriteMeetup() {
    if (isFav) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item} key={props.id}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteMeetup}>
            {isFav ? "Remove from favorite" : "Add to Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}
