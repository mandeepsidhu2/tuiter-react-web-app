import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList
  from "./who-to-follow-list/index";

function Tuiter() {
 return (
   <div>
     <Nav />
     <div className="row">
       <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 ">
         <NavigationSidebar />
       </div>
       <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
       <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/bookmarks" element={<BookmarksScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>

       </div>
       <div className="col-xl-3 col-lg-3 col-3">
       <WhoToFollowList />
      
        </div>
     </div>
   </div>
 );
}
export default Tuiter;