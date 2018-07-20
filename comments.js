import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';


export function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        thumbs: 0
      }, ...state];

    case REMOVE_COMMENT:
      return
        state.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
      return
        state.map(comment => {
          if (comment.id === action.id) {
            comment.text = action.text
          }
        });

    case THUMB_UP_COMMENT:
      return
        state.map(comment => {
          if (comment.id === action.id) {
            comment.thumbs += 1
          }
        });

    case THUMB_UP_COMMENT:
      return
        state.map(comment => {
          if (comment.id === action.id) {
            comment.thumbs -= 1
          }
        });

    default:
      return state;
    }
  };

}

// export function users(...)
