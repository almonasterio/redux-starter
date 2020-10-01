import {
  createSlice
} from '@reduxjs/toolkit';
import {
  createSelector
} from 'reselect'


let lastId = 0
import {apiCallBegan} from './api'

const slice = createSlice({
  name: "bugs",
  initialState: {
    list:[],
    loading:false,
    lastFetch:true //to implementar cashing
  },
  reducers: {
    bugsRequested:(bugs,action)=>{
      bugs.loading= true

    },
    bugsRequestedFailed:(bugs,action)=>{
      bugs.loading=false
    },
    bugsReceived: (bugs,action)=>{
      bugs.list=action.payload;
      bugs.loading=false;
  },
    bugAssignedToUser: (bugs,action)=>{
        const {bugId,userId} =action.payload;
        const index =bugs.list.findIndex(bug=>bug.id===bugId);
        bugs.list[index].userId=userId;


    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      })
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
      bugs.list[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      return bugs.list.filter(bug => bug.id !== action.payload.id);
    }
  }
})

export const {
  bugAdded,
  bugResolved,
  bugRemoved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestedFailed
} = slice.actions;
export default slice.reducer;

// export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);

//action creators
const url='/bugs';

export const loadBugs =()=> apiCallBegan({
  url,
  onStart:bugsRequested.type,
  onSuccess: bugsReceived.type,
  onError:bugsRequestedFailed.type
})

//selectors
export const getUnresolvedBugs=createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser=userId=>createSelector(
  state=>state.entities.bugs,
  bugs=>bugs.filter(bug=>bug.userId===userId)
)

