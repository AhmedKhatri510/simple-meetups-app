import MeetupsItem from "./MeetupsItem";
// import classes from "MeetupsList.module.css";
import classes from "./MeetupsList.module.css";

export default function MeetupsList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meet) => (
        <MeetupsItem
          image={meet.image}
          id={meet.id}
          title={meet.title}
          address={meet.address}
          description={meet.description}
        />
      ))}
    </ul>
  );
}
