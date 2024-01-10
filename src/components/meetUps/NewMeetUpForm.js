import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetUpForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description"></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
