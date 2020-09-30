import {createSlice} from '@reduxjs/toolkit';


let lastId=0;

const slice=createSlice({
  name:"users",
  initialState:[],
  reducers:{
    userAdded: (users,action)=>{
      users.push({
        id: ++lastId,
        name: action.payload.name
      })
    },
    // AddUserBug:(users,action)=>{
    //   const index =users.findIndex(bug=>action.payload)
    // }
  }
})

export const {
  userAdded
  // projectResolved,
  // projectRemoved
} = slice.actions;
export default slice.reducer;