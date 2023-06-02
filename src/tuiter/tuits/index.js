import React from "react";
import {useSelector} from "react-redux";
import TuitItem from './tuit-item'
const Tuits = () => {
    const { tuit_items } = useSelector(state => state.tuitItemReducer)
    console.log(tuit_items)


 return(


   
    <div>
        <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"/>
        <style>
            {
                `
                .cd-card-feed {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  }
                  
  
                  .content {
                    flex: 1;
                    margin-left: 20%;
                  }
                `


            }
            

        </style>
        
        <title>Card Feed</title>
        </head>
        <body>
        <div class="content">
        <div class="cd-card-feed">
            
            {
        tuit_items.map(tuit =>
            <TuitItem
            key={tuit._id} tuit={tuit}/> )

        }
{/* 
        <div class="cd-card">
            <div class="cd-user-info-container">
            <div class="cd-user-info">
                <img class="cd-user-dp" src="https://picsum.photos/id/237/200/300" alt="User DP"/>
            </div>
            </div>
            <div class="cd-card-header">

                <div class="cd-user-details">
                <span class="cd-username">Jonty Smith</span>
                <i class="fas fa-check-circle cd-verified"></i>
                <span class="cd-date">May 16, 2023</span>
                </div>
            
            <div class="cd-ellipsis-container">
                <i class="fas fa-ellipsis-h cd-ellipsis-icon"></i>
            </div>
            </div>
            <div class="cd-tweet-content">
            <p class="cd-tweet-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis tincidunt arcu, et viverra dui ultricies ut.</p>
            </div>
          
            <div class="cd-card-actions">
            <span class="cd-icon-with-number">
                <i class="far fa-comments"></i>
                <span class="cd-icon-number">56</span>
            </span>
            <span class="cd-icon-with-number">
                <i class="far fa-retweet"></i>
                <span class="cd-icon-number">6</span>
            </span>
            <span class="cd-icon-with-number">
                <i class="far fa-heart"></i>
                <span class="cd-icon-number">95</span>
            </span>
            <span class="cd-icon-with-number">
                <i class="far fa-share"></i>
                <span class="cd-icon-number">24</span>
            </span>
        
            </div>
        </div>

       

        <div class="cd-card">
            <div class="cd-user-info-container">
            <div class="cd-user-info">
                <img class="cd-user-dp" src="https://picsum.photos/id/230/300" alt="User DP"/>
            </div>
            </div>
            <div class="cd-card-header">

                <div class="cd-user-details">
                <span class="cd-username">Jonty Smith</span>
                <i class="fas fa-check-circle cd-verified"></i>
                <span class="cd-date">May 16, 2023</span>
                </div>
            
            <div class="cd-ellipsis-container">
                <i class="fas fa-ellipsis-h cd-ellipsis-icon"></i>
            </div>
            </div>
            <div class="cd-tweet-content">
            <p class="cd-tweet-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis tincidunt arcu, et viverra dui ultricies ut.</p>
            </div>
          
            <div class="cd-card-actions">
            <span class="cd-icon-with-number">
                <i class="far fa-comments"></i>
                <span class="cd-icon-number">56</span>
            </span>
            <span class="cd-icon-with-number">
                <i class="far fa-retweet"></i>
                <span class="cd-icon-number">6</span>
            </span>
            <span class="cd-icon-with-number">
                <i class="far fa-heart"></i>
                <span class="cd-icon-number">95</span>
            </span>
            <span class="cd-icon-with-number">
                <i class="far fa-share"></i>
                <span class="cd-icon-number">24</span>
            </span>
        
            </div>
        </div> */}
        </div>
        </div>
    </body>
    </div>
  
 );
};
export default Tuits;