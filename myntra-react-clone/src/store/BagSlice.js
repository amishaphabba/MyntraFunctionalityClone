import { createSlice } from "@reduxjs/toolkit"

const BagSlice = createSlice({
    name: "bag",
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            // modifying array so no need to return
            state.push(action.payload);
        },
        removeFromBag: (state, action) =>{
            // creating new array so we have to return it
            return state.filter((itemId)=> itemId !== action.payload)
        }

    }
})

export const BagActions = BagSlice.actions
export default BagSlice