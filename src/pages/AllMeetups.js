import { useEffect, useState } from "react";
import MeetupLists from "../components/meetUps/MeetupLists";

const AllMeetups = () => {
  const [isMeetupdata, setMeetupdata] = useState([]);
 const[isLoaded, setIsloaded] =  useState(true)
  useEffect(() => {
    setIsloaded(true)
    fetch("https://meetup-fb601-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetup = [];
        for (const key in data) {
          const meetup1 = {
            id: key,
            ...data[key],
          };
          meetup.push(meetup1);
        }
        setMeetupdata(meetup);
        setIsloaded(false)
      });
  }, []);
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupLists meetups={isMeetupdata} />
      {/* <ul>
                {DUMMY_DATA.map((e)=>{
                    return <li key={e.id}>{e.title}</li>
                })}
            </ul> */}
    </section>
  );
};

export default AllMeetups;
