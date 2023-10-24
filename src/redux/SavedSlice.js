/* eslint-disable eqeqeq */


import { createSlice } from "@reduxjs/toolkit";

const SavedSlice = createSlice({
    name:"saved",
    initialState:{
        items:[],
    },
    reducers:{
        addToSaved: (state,action) => {
            state.items.push(action.payload);
        },
        removeFromSaved:(state,action)=>{
            state.items = state.items.filter((item) =>{
                return item.id != action.payload.id;
            })
        },
        clearSaved: (state,action) => {
            return {items:[]};
        }
    }

});

export const { addToSaved , removeFromSaved , clearSaved} = SavedSlice.actions;

export default SavedSlice.reducer;