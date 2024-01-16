import { useContext } from "react";
import FavoriteContext from '../store/Favorite-context'
import MeetupLists from '../../src/components/meetUps/MeetupLists'

const Favorite = ()=>{
    const favoriteCTX =  useContext(FavoriteContext);
    let content;
    if(favoriteCTX.totalFavorite === 0){
        content = <p>There is no Favorite Meetup</p>
    }
    else{
        content = <MeetupLists meetups={favoriteCTX.favorite}/>
        
    }
    return (
        <section>
        <h1>Your Favorite meetups:</h1>
        {content}
        </section>)
}

export default Favorite;