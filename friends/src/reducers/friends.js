const friendsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return action.payload.data;
    case 'GET_FRIENDS':
      return action.payload.data;
    case 'DELETE_FRIEND':
      return action.payload.data;
    default:
      return state;
  }
};

export default friendsReducer;