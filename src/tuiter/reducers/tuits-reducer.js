import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "/images/nasa.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: { tuits: tuits },
 reducers: {
    deleteTuit(state, action) {
        const index = state.tuits
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.tuits.splice(index, 1);
      },
   
   createTuit(state, action) {
     state.tuits.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   },
   toggleLikeTuit(state,action){
    const index = state.tuits
    .findIndex(tuit =>
       tuit._id === action.payload);
       if(state.tuits[index].liked)
         state.tuits[index].likes-=1;
      else 
       state.tuits[index].likes+=1;
      state.tuits[index].liked=!state.tuits[index].liked;
   }
 }
});

export const {createTuit,deleteTuit,toggleLikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;