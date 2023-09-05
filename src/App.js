import { Route, Switch } from "react-router-dom";
import AllMeetups from './pages/AllMeetups'
import Favorite from './pages/Favorite'
import Newmeetups from './pages/Newmeetups'

function App() {
  return (
    <div>
      <Switch>
      <Route path='/' exact><AllMeetups/></Route>
      <Route path='/favorite' exact><Favorite/></Route>
      <Route path='/newmeetups' exact><Newmeetups/></Route>
      </Switch>
    </div>
  );
}

export default App;
