import MeetupsList from "../components/meetups/MeetupsList";
import { useContext } from "react";
import FavoriteContext from "../components/store/favorites-context";

export default function Favorites() {
  const favoriteCtx = useContext(FavoriteContext);
  let content;
  if (favoriteCtx.totalFavorites === 0)
    content = <p>You don't have any favorites, need to add some ?</p>;
  else content = <MeetupsList meetups={favoriteCtx.favorites} />;
  return (
    <div>
      <h1>My favourites</h1>
      {content}
    </div>
  );
}
