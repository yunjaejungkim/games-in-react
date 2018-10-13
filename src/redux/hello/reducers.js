export const UPDATE_NAME_ACTION_TYPE = 'USER_NAME_UPDATE';

export function updateName(state = '', action) {
    switch (action.type) {
        case UPDATE_NAME_ACTION_TYPE:
            return action.text;
        default:
            return state;
    }
}