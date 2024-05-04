import  {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemsSlice"
import fetchStatusSlice from "./fetchStatus"
import BagSlice from "./BagSlice"

const myntraStore = configureStore({
    reducer:{
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: BagSlice.reducer
    }
})

export default myntraStore