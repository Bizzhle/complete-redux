import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreators";

//  ui components subscribe to the stire to be notified when state changes
// can be used to unsubscribe from a store when user no longer in that page to avoid memory leaks
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// state = reducer(state, action);
//notify the subscriber

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch(bugRemoved(1));
