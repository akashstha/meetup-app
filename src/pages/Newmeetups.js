import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NewMeetUpForm from "../components/meetUps/NewMeetUpForm";

const Newmeetups = ()=>{

    const history = useHistory();
    const addMeetupHandler = (meetupData)=>{
        fetch('https://meetup-fb601-default-rtdb.firebaseio.com/meetups.json',{
            method : 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=> history.replace('/'))
        // console.log("datass", meetupData);

    }
    return <section>
        <h1>Your new meetups </h1>
        <NewMeetUpForm addMeetup={addMeetupHandler}/>
    </section>
}

export default Newmeetups;