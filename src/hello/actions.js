import { UPDATE_NAME_ACTION_TYPE } from './reducers';

export const updateName = text => ({
    type: UPDATE_NAME_ACTION_TYPE,
    text
});