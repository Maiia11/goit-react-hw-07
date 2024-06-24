import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: ""
    },
    reducers: {
        searchContact(state, action) {
            state.name =  action.payload;
            
        }
        
    }
})

export const { searchContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;