import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoriteContext from "../../store/Favorite-context";

const MeetupItems = (props) => {
  const favoriteMeetupCTX = useContext(FavoriteContext);

  const isItemFavorite = favoriteMeetupCTX.itemIsUserFavorite(props.id);

  const toggleHandler = () => {
    if (isItemFavorite) {
      favoriteMeetupCTX.removeUserFavorite(props.id);
    } else {
      favoriteMeetupCTX.addUserFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };

  return (
    <li className={classes.items}>
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
          <button onClick={toggleHandler}>
            {isItemFavorite ? "Remove from Favorite" : "Add to Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItems;
