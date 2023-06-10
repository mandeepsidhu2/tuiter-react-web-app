import React, {useEffect}  from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunks";

import TuitItem from './tuit-item'
const Tuits = () => {
  //  const { tuits } = useSelector(state => state.tuits)
    const {tuits, loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk())
      }, [])
     

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
        { loading &&
            <li className="list-group-item">
                Loading...
            </li>
            }

     
      {tuits.length ?<div style={{ border: "1px solid #C8C8C9", width: "100%",height:"10px" ,borderBottom:"0px",borderRadius: "10px 10px 0 0" }}></div>:null}

            {
        tuits.map((tuit, idx) => (
            <span style={{width:"100%"}}>
            <TuitItem key={tuit._id} tuit={tuit} idx={idx} len={tuits.length} />
            </span>
        ))
        }

        </div>
        </div>
    </body>
    </div>
  
 );
};
export default Tuits;