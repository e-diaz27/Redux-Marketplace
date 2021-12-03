import { createStore } from 'redux';
import reducers from './reducers';

// undid preloaded state to attempt render

export default createStore(reducers);