import MeetupItems from "./MeetupItems"

const MeetupLists = (props) =>{
    return <ul>
        {props.meetups.map((meetups)=> <MeetupItems key={meetups.id} id={meetups.id} title={meetups.title} image={meetups.image} address={meetups.address} description={meetups.description}/>)}
    </ul>
}

export default MeetupLists