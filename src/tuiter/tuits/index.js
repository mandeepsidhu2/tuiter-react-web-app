import React from "react";
import {useSelector} from "react-redux";
import TuitItem from './tuit-item'
const Tuits = () => {
    const { tuits } = useSelector(state => state.tuits)


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
                    margin-left: 0%;
                  }
                `


            }
            

        </style>
        
        <title>Card Feed</title>
        </head>
        <body>
        <div class="content">
        <div class="cd-card-feed">
     
      {tuits.length ?<div style={{ border: "1px solid #C8C8C9", width: "100%",height:"5px" ,borderBottom:"0px",borderRadius: "8px 8px 0 0" }}></div>:null}

            {
        tuits.map((tuit,idx) =>
            <TuitItem
            key={tuit._id} tuit={tuit} idx={idx} len={tuits.length}/> )

        }

        </div>
        </div>
    </body>
    </div>
  
 );
};
export default Tuits;