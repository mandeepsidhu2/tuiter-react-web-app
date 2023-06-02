import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuit-items.json';

const tuitsItemsSlice = createSlice({
 name: 'tuitItems',
 initialState: { tuit_items: tuits }
});

export default tuitsItemsSlice.reducer;