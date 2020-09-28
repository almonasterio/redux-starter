import * as actions from './store/bugs'
import configureStore from './store/configureStore'

const store=configureStore();
console.log(store)
store.dispatch(actions.bugAdded({description:"Bug1"}))
store.dispatch(actions.bugAdded({description:"Bug2"}))
store.dispatch(actions.bugAdded({description:"Bug3"}))
store.dispatch(actions.bugResolved({id:3}))
store.dispatch(actions.bugRemoved({id:1}))

console.log(store.getState())

