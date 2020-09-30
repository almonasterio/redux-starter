import {
  bugAdded,
  bugAssignedToUser,
  bugResolved,
  bugRemoved,
  getUnresolvedBugs,
  getBugsByUser
} from './store/bugs'
import {
  projectAdded,
  projectRemoved,
  projectResolved
} from './store/projects'
import {
  userAdded
} from './store/users'

import configureStore from './store/configureStore'

const store = configureStore();
// console.log(store);
// store.dispatch(userAdded({name:"Joe"}))
// store.dispatch(bugAdded({description:"Bug1"}))
// store.dispatch(bugAdded({description:"Bug2"}))
// store.dispatch(bugAdded({description:"Bug3"}))
// store.dispatch(bugAssignedToUser({bugId:2,userId:1}))
// store.dispatch(bugResolved({id:3}))
// store.dispatch(bugRemoved({id:1}))
// store.dispatch(projectAdded({description:"project1"}))
// store.dispatch(projectAdded({description:"project2"}))
// store.dispatch(projectResolved({id:2}))
store.dispatch(projectRemoved({id:1}))
store.dispatch({type:"error"})
// store.dispatch((dispatch, getState) => {
//   dispatch({
//     type: "bugsReceived",
//     bugs: [1, 2, 3]
//   });
//   console.log(getState())
// })

// getUnresolvedBugs(store.getState())

// const bugs=getBugsByUser(1)(getState())
// console.log(bugs)