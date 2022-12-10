// implement_immutablejs.js
const { default: immutable } = require("immutable");
const Immutable = require("immutable");

// Lets think about how we could refactor our application state flow to use Immutable.
// The original code is provided below, how might you re-write both the store object and updateStore function with Immutable?
// Remember if you need help, the docs should be the first place you look.

// const store = Immutable.Map({
//   user: {
//     first_name: "John",
//     last_name: "Doe",
//   },
// });

// const updateStore = (store, newState) => {
//   store = immutable.Map(newState);
//   render(root, store);
// };

//--------------------------------Solution
let store = Immutable.Map({
  user: Immutable.Map({
    firstName: "John",
    lastName: "Doe",
  }),
});

function updateStore(state, newState) {
  store = state.merge(newState);
  render(root, store);
}

updateStore(store, newState);
console.log(store.getIn(["user", "name"]));
