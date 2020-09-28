import * as actions from './store/bugs'
import configureStore from './store/configureStore'

const store=configureStore();

store.dispatch(actions.bugAdded("Bug1"))
store.dispatch(actions.bugAdded("Bug2"))
store.dispatch(actions.bugAdded("Bug3"))
store.dispatch(actions.bugRemoved(1))

console.log(store.getState())

