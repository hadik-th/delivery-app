import { createSlice } from "@reduxjs/toolkit";


const initialState={
  username:""
};

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{

    updateName(state,action){
      //mutating stae via toolkit 
      state.username = action.payload
    },
  },
})

export const {updateName}=userSlice.actions; //named expor used
export default userSlice.reducer;