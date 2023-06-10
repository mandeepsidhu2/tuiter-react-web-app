import {
  createSlice
} from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {
  deleteTuitThunk,
  findTuitsThunk,
  createTuitThunk,
  updateTuitThunk
} from "../services/tuits-thunks";
import { profileThunk,updateUserThunk,register } from "../services/auth-thunks";

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
  initialState: {
      tuits: tuits
  },
  extraReducers: {
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
      [createTuitThunk.fulfilled]: (state, {
          payload
      }) => {
          state.loading = false
          state.tuits.push(payload)
      },


      [deleteTuitThunk.fulfilled]: (state, {
          payload
      }) => {
          state.loading = false
          state.tuits = state.tuits.filter(t => t._id !== payload)
      },
      [findTuitsThunk.pending]: (state) => {
          state.loading = true
          state.tuits = []
      },
      [findTuitsThunk.fulfilled]: (state, {
          payload
      }) => {
          state.loading = false
          state.tuits = payload
      },
      [findTuitsThunk.rejected]: (state, action) => {
          state.loading = false
          state.error = action.error
      },

      [updateTuitThunk.fulfilled]: (state, {
          payload
      }) => {
          state.loading = false
          payload=payload.data
          const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
          console.log(payload)
          state.tuits[tuitNdx] = {
              ...state.tuits[tuitNdx],
              ...payload
          }
      }
   

  }


  //  reducers: {
  //     deleteTuit(state, action) {
  //         const index = state.tuits
  //            .findIndex(tuit =>
  //               tuit._id === action.payload);
  //         state.tuits.splice(index, 1);
  //       },

  //    createTuit(state, action) {
  //      state.tuits.unshift({
  //        ...action.payload,
  //        ...templateTuit,
  //        _id: (new Date()).getTime(),
  //      })
  //    },
  //    toggleLikeTuit(state,action){
  //     const index = state.tuits
  //     .findIndex(tuit =>
  //        tuit._id === action.payload);
  //        if(state.tuits[index].liked)
  //          state.tuits[index].likes-=1;
  //       else 
  //        state.tuits[index].likes+=1;
  //       state.tuits[index].liked=!state.tuits[index].liked;
  //    }
  //  }
});

export const {
  createTuit,
  deleteTuit,
  toggleLikeTuit
} = tuitsSlice.actions;
export default tuitsSlice.reducer;