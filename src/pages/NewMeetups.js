import NewMeetupsForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

export default function NewMeetups() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-b02ac-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "post",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <h1>Add new Meetups</h1>
      <NewMeetupsForm AddMeetup={addMeetupHandler} />
    </div>
  );
}
