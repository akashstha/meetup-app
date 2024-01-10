import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from './MainNavigation.module.css'

const MainNavigation = () =>{
    return(
    <header className={classes.header}>
    <div className={classes.logo} >React Meetups!!</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>All Meetup</Link>
            </li>
            <li>
                <Link to='/newmeetups'>Add new Meetups</Link>
            </li>
            <li>
                <Link to='/favorite'>My Favorite</Link>
            </li>
        </ul>
    </nav>
    </header>
    )
    
}

export default MainNavigation;