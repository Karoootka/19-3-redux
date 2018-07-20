// w domyśle na potrzeby zadania przyjmuję, że uuid jest zainstalowane ;) Doinstaluję poźniej, jeśli zadanie będzie rozwijane.
// import uuid from uuid;

// ACTIONS akcje

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// ACTIONS CREATORS kreatory akcji

function AddComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid(),
    thumbs: 0
  }
};

function RemoveComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
};

function EditComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
};

function ThumbUpComment(id, thumbs) {
  return {
    type: THUMB_UP_COMMENT,
    id,
    thumbs: thumbs + 1
  }
};

function ThumbDownComment(id, thumbs) {
  return {
    type: THUMB_DOWN_COMMENT,
    id,
    thumbs: thumbs - 1
  }
};

// SHORT ACTIONS CREATORS skondensowane kreatory akcji + dispatch (wysyłka stanu)

const boundAddComment = text => dispatch(AddComment(text));
const boundRemoveComment = id => dispatch(RemoveComment(id));
const boundEditComment = (text, id) => dispatch(EditComment(text, id));
const boundThumbUpComment = (id, thumbs) => dispatch(ThumbUpComment(id, thumbs));
const boundThumbDownComment = (id, thumbs) => dipsatch(ThumbDownComment(id, thumbs));
