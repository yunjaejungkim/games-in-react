import { createStore } from 'redux';

function updateName(state = '', action) {
    switch (action.type) {
        case 'USER_NAME_UPDATE':
            return action.text;
        default: 
            return state;
    }
}

let store = createStore(
    updateName,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;