export const UserAction = {
    UPDATE_USER: 'UPDATE_USER',
};

export const updateUser = user => dispatch => {
    dispatch({ type: UserAction.UPDATE_USER, payload: user });
};