import * as actions from './actions'
import store from './store'

store.dispatch(actions.bugAdded("Bug1"))
store.dispatch(actions.bugRemoved(1))

console.log(store.getState())

