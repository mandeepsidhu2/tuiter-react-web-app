import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit,toggleLikeTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../services/tuits-thunks";

import { updateTuitThunk } from "../services/tuits-thunks";



const TuitItem =  (
    {
      tuit = 
      {
      "_id": 234,
      "topic": "Space",
      "userName": "SpaceX",
      "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
      "time": "2h",
      "image": "spacex.png",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      },
      idx=0,
      len=1
    }
   )=> {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuitThunk(id));
      }
    

 return(


   
    <div>
        <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"/>
        <style>
            {
                `     
                  .cd-card {
                  
                    border: 1px solid #C8C8C9;
                    border-top:0px;
                    border-bottom:0px;
                    
                  
                    margin: 0;
                  padding: 10px;
                    max-width: 100%;
                 
                    background-color: #ffffff;
                  
                   
                  }
                  
                  .cd-card-header {
                    display: flex;
                    align-items: center;
                    padding: 0px;
                  }
                  
                  .cd-user-dp {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    margin-right: 10px;
                  }
                  
                  .cd-username {
                    font-size: 14px;
                    font-weight: bold;
                  }
                  
                  .cd-card-image {
                    width: 100%;
                    height: auto;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                  }
                  
                  .cd-card-content {
                    border: 3px solid rgb(247, 247, 247);
                    border-radius: 10px;
                    overflow: hidden;
                  }
                  
                  .cd-card-text {
                    margin-bottom: 10px;
                  }
                  
                  .cd-card-actions {
                    padding-top: 10px;
                    display: flex;
                    justify-content: space-between;
                  }
                  
                  .cd-card-actions i {
                   
                    color: gray;
                    cursor: pointer;
                  }
                  
                  .cd-verified {
                    color: #1da1f2;
                    font-size: 12px;
                    margin: 15px;
                  }
                  
                  .cd-date {
                    font-size: 12px;
                    color: gray;
                  }
                  
                  .cd-tweet-content {
                    padding: 0px;
                    background-color: #ffffff;
                  }
                  
                  .cd-tweet-text {
                    margin-bottom: 10px;
                 
                   
                  }
              
                  
                  
                  .cd-card {
                    position: relative;
                    overflow: visible;
                  }
                  
                  .cd-user-details {
                    display: flex;
                    align-items: center;
                    margin-right: auto;
                  }
                  
                  .cd-username {
                    margin-right: 5px;
                  }
                  
                  .cd-ellipsis-container {
                    margin-left: auto;
                  }
                  
                  .cd-ellipsis-icon {
                    color: gray;
                    cursor: pointer;
                  }
                  
                  .cd-header {
                    display: flex;
                    margin-left: 31%;
                    margin-bottom: 2%;
                  }
                  
                  .cd-header-left {
                    margin-left: 40px;
                  }
                  
                  .cd-bookmarks {
                    font-weight: bold;
                    margin-left: 20px;
                    margin-right: 10px;
                  }
                  
                  .cd-header-right {
                    float: right;
                    margin-left: 405px;
                  }
                  
                  .fa-icon {
                    color: gray;
                    cursor: pointer;
                  }
                  
               
                  
                  .cd-icon-with-number {
                    display: flex;
                    align-items: center;
                   padding-right:15%;
                    
                  }
                  
                  .cd-icon-number {
                    margin-left: 5px;
                    font-size: 14px;
                    color: gray;
                  }
                  
                  .container {
                    display: flex;
                  }
                  
                  .navbar {
                    width: 200px;
                    padding: 0;
                    border-collapse: collapse;
                    background-color: #ffffff;
                    max-height: 50vh;
                    overflow-y: auto;
                  }
                  
                  .navbar {
                    margin-left: 10%;
                    position: absolute;
                    width: 200px;
                    padding: 0;
                    border-collapse: collapse;
                  }
                  
                  .navbar td {
                    padding: 10px 0 10px 20px;
                    color: black;
                  }
                  
                  .navbar td i {
                    margin-right: 10px;
                  }
                  
                  .navbar td a {
                    color: black;
                    text-decoration: none;
                  }
                  
                  .navbar td:hover {
                    background-color: rgb(12, 110, 253);
                    color: white;
                  }
                  
                  .content {
                    flex: 1;
                    padding: 20px;
                  }
                `


            }
            

        </style>
        
       
        </head>
        <body>
        <div>
        <div class="cd-card container">
          <div class="row" style={{width:"100%"}}>
              <div style={{width:"11%"}}>
                <div class="cd-user-info">
                    <img class="cd-user-dp" src={tuit.image} alt="User DP"/>
                </div>
              </div>
              <div style={{width:"89%"}}>
                <div class="cd-card-header">

                    <div class="cd-user-details">
                    <span class="cd-username">{tuit.userName}</span>
                    <span class="cd-date">{tuit.handle}</span>
                    <i class="fas fa-check-circle cd-verified"></i>
                    <span class="cd-date">{tuit.time}</span>
                    </div>
                
                <div class="cd-ellipsis-container">
        
                <i class=" fas fa-solid fa-x fa-xs"  onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
                </div>
                <div class="cd-tweet-content">
                <p class="cd-tweet-text">{tuit.tuit}</p>
                </div>
              
                <div class="cd-card-actions">
                <span class="cd-icon-with-number">
                    <i class="far fa-comments"></i>
                    <span class="cd-icon-number">{tuit.replies}</span>
                </span>
                <span class="cd-icon-with-number">
                    <i class="far fa-retweet"></i>
                    <span class="cd-icon-number">{tuit.retuits}</span>
                </span>
                <span class="cd-icon-with-number">
                   <i class="fa-solid fa-heart" style={{color: "#dc3446"}} onClick={() =>  dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes +1}))}></i>
                  <span class="cd-icon-number">{tuit.likes}</span>
                </span>
                <span class="cd-icon-with-number">
                   <i class="fa-solid fa-thumbs-down"  onClick={() =>  dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes +1}))}></i>
                  <span class="cd-icon-number">{tuit.dislikes}</span>
                </span>
                <span class="cd-icon-with-number">
                    <i class="far fa-share"></i>
                    <span class="cd-icon-number">{tuit.retuits}</span>
                </span>
            
                </div>
              </div>
            </div>
        </div>
      
        {(idx!=len-1)?
        <div style={{ border: "1px solid #C8C8C9", height: "0px",borderTop:"0px" }}></div>:
        <div style={{ border: "1px solid #C8C8C9", width: "100%",height:"10px" ,borderTop:"0px",borderRadius: "0px 0px 10px 10px" }}></div>
        }
        </div>


      
        
    </body>
    </div>
  
 );
};
export default TuitItem;