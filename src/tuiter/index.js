import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList
  from "./who-to-follow-list/index";
import TuitsList from "./tuits/index";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import tuitItemReducer from "./reducers/tuit-item-reducer";
 const store = configureStore({reducer: {who: whoReducer,tuits: tuitsReducer,tuitItemReducer:tuitItemReducer}});

function Tuiter() {
 return (
  <Provider store={store}>
   <div>
     <Nav />
     <div className="row">
       <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 ">
         <NavigationSidebar />
       </div>
       <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
       <Routes>
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/home" element={<TuitsList />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/bookmarks" element={<BookmarksScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>

       </div>
       <div className="col-xl-3 col-lg-3  d-lg-inline d-none">
       <WhoToFollowList />
      
        </div>
     </div>
   </div>
   </Provider>
 );
}
export default Tuiter;