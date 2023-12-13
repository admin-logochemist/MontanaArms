import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'item',
    initialState:{
        items:[],
        filteredItem:[],
        count: 0,
        item: {}
    },
    reducers:{
        addItems: (state, action)=>{
            state.items = action.payload;

        },
        addItem:(state, action)=>{
            state.item = action.payload;
        },
        addFilteredItemsCategories: (state, action) =>{
            state.filteredItem = action.payload
        },
        addCount: (state, action) =>{
            state.action = action.payload
        },
    
    }
})
export const {addItems,addItem,addCount , addFilteredItemsCategories} = itemSlice.actions;
export default itemSlice.reducer;