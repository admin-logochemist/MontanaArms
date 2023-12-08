import { createSlice } from '@reduxjs/toolkit';
import gunImg from "../assets/images/orderGun.png"

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
      // {
      //   id: 1,
      //   image: gunImg,
      //   title: 'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',
      //   price: 1644.49
      // },
    ],
    show: false
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // Assuming payload is an item to add
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload); // Assuming payload contains an item ID or identifier
    },
    openCart: (state) =>{
      state.show = true;
    },
    closeCart: (state) =>{
      state.show = false;
    },
  },
});

export const { addToCart, removeFromCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
