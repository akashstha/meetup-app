import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorite: [],
  totalFavorite: 0,
  addUserFavorite:(meetupFavorite)=>{},
  removeUserFavorite:(meetid)=>{},
  itemIsUserFavorite:(meetid)=>{},
});

export const FavoriteContextProvider = (props) => {

  const [userfavorite, setUserfavorite] = useState([]);



  const addUserFavoriteHandler = (meetups) => {
    setUserfavorite((prevUserfavorite) => {
      return prevUserfavorite.concat(meetups);
    });
  };
  const removeUserFavoriteHandler = (meetupID) => {
    setUserfavorite((prevUserfavorite) => {
      return prevUserfavorite.filter((meetid) => meetid.id !== meetupID);
    });
  };
  const iteamIsUserFavoriteHandler = (meetID) => {
   return userfavorite.some(meetup => meetup.id === meetID)
  };

  const context = {
    favorite: userfavorite,
    totalFavorite: userfavorite.length,
    addUserFavorite:addUserFavoriteHandler,
    removeUserFavorite:removeUserFavoriteHandler,
    itemIsUserFavorite:iteamIsUserFavoriteHandler
  };
 
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
