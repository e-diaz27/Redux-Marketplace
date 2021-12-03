import { createStore } from 'redux';
import reducers from './reducers';

// create store.js to centralize global state and actions via reducer
//preload initial state as second argument of store

const initialState = {
    products: [],
    categories: [],
    currentCategory: '',
    cart: [],
    cartOpen: false
  };

export default createStore(reducers, initialState);