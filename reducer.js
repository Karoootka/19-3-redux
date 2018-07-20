import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

const initialState = {
  comments: [],
  users: []
};

function reducer(state = initialState, action) {
  switch(action.type) {

    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [
          {
            id: action.id,
            text: action.text,
            thumbs: 0
          }
          , ...state.comments]
      });

    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id) //po każdym elemencie (comment) tablicy comments - id elementu !== id podanego w action
      });

    case EDIT_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id) {
            comment.text = action.text
          }
        })
      });

    case THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id) {
            comment.thumbs += 1
          }
        })
      });

    case THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id) {
            comment.thumbs -= 1
          }
        })
      });

    default:
      return state;
  }
};
