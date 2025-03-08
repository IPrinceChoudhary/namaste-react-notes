import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ // creating cart slice with initial value an empty array
  name: "cart",
  initialState: {
    items: ["random", "random2"]
  },
  reducers: { // to modify the cart. these functions will be called after dispatch of an action
    addItem: (state, action)=>{ // what action : reducer func. (initial state, items to add)
      state.items.push(action.payload)
    },
    removeItem: (state, action)=>{
      state.items.pop()
    },
    clearCart: (state)=>{
      state.items = []
    }
  }
})

// behind the scenes cartSlice slice might look something like this 
// cartSlice = {
//   actions: {
//     addItem,
//     removeItem,
//     clearCart,
//   },
//   reducer: reducers
// }

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer