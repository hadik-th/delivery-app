import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cart:[]
    cart:[{
        pizzaId:12,
        nmae:"maindi",
        quantity:2,
        unitPrice:16,
        totalPrice:32 
    }]
};

const cartSlice = createSlice({
    name:'cart',
    initialState,reducers:{
        addItem(state,action){
            //payload === newitem
        state.cart.push(action.payload)
        },
        deleteItem(state,action){
            //payload ==pizzaID
            state.cart=state.cart.filter((item)=>item.pizzaId !==action.payload)

        },
        increaseItemQuantity(state,action){
            const item = state.cart.find((item)=>item.pizzaId===action.payload)
            item.quantity ++;
            item.totalPrice = item.quantity * item.unitPrice;

        },
        decreaseItemQuantity(state,action){
            const item = state.cart.find((item)=>item.pizzaId===action.payload)
            item.quantity --;
            //here there is trick to use reducers which are already written as result/action.
            if(item.quantity===0) cartSlice.caseReducers.deleteItem(state,action)
            //here we are re - using the reducer deleteItem, since when cart item is 0 we will delete that product from cart
        },
       clearCart(state){
        state.cart = [];

        },

    }
});

export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart}=cartSlice.actions;

export default cartSlice.reducer


export const getTotalQuantity =(state)=>state.cart.cart.reduce((sum,item)=>sum + item.quantity,0);
export const getCart = (state)=>state.cart.cart;

export const getItemQuantity = id => state => state.cart.cart.find(item=>item.pizzaId===id)?.quantity ?? 0; 

//we can also create selector function for total number of price.and above one is the selector function for 
//number of quantity.

//reselect library for redux can be used to optimize the selector function for large scale applications.

