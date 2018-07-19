// w domyśle na potrzeby zadania przyjmuję, że uuid jest zainstalowane ;) Doinstaluję poźniej, jeśli zadanie będzie rozwijane.
// import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function AddComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid()
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

function ThumbUpComment(id, liked) {
  return {
    type: THUMB_UP_COMMENT,
    id,
    like: liked + 1
  }
};

function ThumbDownComment(id, disliked) {
  return {
    type: THUMB_DOWN_COMMENT,
    id,
    dislike: disliked + 1
  }
};

const boundAddComment = text => dispatch(AddComment(text));
const boundRemoveComment = id => dispatch(RemoveComment(id));
const boundEditComment = (text, id) => dispatch(EditComment(text, id));
const boundThumbUpComment = (id, liked) => dispatch(ThumbUpComment(id, liked));
const boundThumbDownComment = (id, disliked) => dipsatch(ThumbDownComment(id, disliked));
