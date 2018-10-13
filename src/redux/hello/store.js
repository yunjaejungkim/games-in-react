import { createStore } from 'redux';
import { updateName } from './reducers';

const HelloStore = createStore(
    updateName,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default HelloStore;