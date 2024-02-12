import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

// const initialState = {
//   data: [],
// };

export const cartStage = createSlice({
  name: "cartStage",
  initialState: [],
  reducers: {
    addCartHandler: (state, action) => {
      const { image, product_id, price, name, quantity, qty } = action.payload;
      const existingItem = state.find((item) => item.product_id === product_id);
      console.log(action.payload);
      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.push({ image, product_id, price, name, quantity, qty });
      }
      // } else {
      //   toast.warning(
      //     "No more items are currently available for this product."
      //   );
      // }

      // state.count = state.length;
    },
    removeCartHandler: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.product_id !== itemId);
    },
    updateQuantity: (state, action) => {
      const d = action.payload;
      console.log(d);
      // const existingItem = state.find((item) => item.product_id === id);

      // if (existingItem) {
      //   existingItem.qty = qty;
      // }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartHandler, removeCartHandler, updateQuantity } =
  cartStage.actions;

export default cartStage.reducer;
