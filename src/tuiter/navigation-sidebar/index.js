import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more","login","register"];
 return (
   <div className="list-group">
     {links.map((link) => 
        { 
          if((link=="login"||link=="register")){
            if(!currentUser)
              return <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
              {link}
            </Link>
          }
          else if(link=="logout"||link=="profile"){
              if(currentUser)
              return <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
              {link}
            </Link>
          }
          else{
          return <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
              {link}
            </Link>
          }
        }
     )}

   </div>
 );
};
export default NavigationSidebar;