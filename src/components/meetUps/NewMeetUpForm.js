import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetUpForm = (props) => {
  const inputTitleRef = useRef();
  const inputImageRef = useRef();
  const inputAddressRef = useRef();
  const inputDescriptionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputTitleRefHandler = inputTitleRef.current.value;
    const inputImageRefHandler = inputImageRef.current.value;
    const inputAddressRefHandler = inputAddressRef.current.value;
    const inputDescriptionRefHandler = inputDescriptionRef.current.value;

    const meetUpsData = {
      title: inputTitleRefHandler,
      image: inputImageRefHandler,
      address: inputAddressRefHandler,
      description: inputDescriptionRefHandler,
    };

    props.addMeetup(meetUpsData)
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={inputTitleRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={inputImageRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={inputAddressRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description" ref={inputDescriptionRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
