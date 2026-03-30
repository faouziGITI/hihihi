import { item } from "@/apptypes/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  cart: item[];
  price: number;
};

const initialState: initialState = {
  cart: [],
  price: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        item: item;
        quantities?: number;
      }>,
    ) => {
      const index = state.cart.findIndex(
        (e) => e.id === action.payload.item.id,
      );

      if (index !== -1) {
        if (action.payload.quantities) {
          state.cart[index].quantity += action.payload.quantities;
        } else {
          state.cart[index].quantity++;
        }
      } else {
        state.cart.push(action.payload.item);
      }
      state.price = state.cart.reduce(
        (prev, currv) => prev + currv.price * currv.quantity,
        0,
      );
    },
    decrementQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        quantities?: number;
      }>,
    ) => {
      const index = state.cart.findIndex((e) => e.id === action.payload.id);

      if (state.cart[index].quantity > 1) {
        if (
          action.payload.quantities &&
          state.cart[index].quantity > action.payload.quantities
        ) {
          state.cart[index].quantity -= action.payload.quantities;
        } else {
          state.cart[index].quantity--;
        }
      } else {
        state.cart.splice(index, 1);
      }
      state.price = state.cart.reduce(
        (prev, currv) => prev + currv.price * currv.quantity,
        0,
      );
    },
    removeElement: (state, action: PayloadAction<item>) => {
      const index = state.cart.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      } else {
        throw new Error("Item not found");
      }
      state.price = state.cart.reduce(
        (prev, currv) => prev + currv.price * currv.quantity,
        0,
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeElement, decrementQuantity } =
  cartSlice.actions;
