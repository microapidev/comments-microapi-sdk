const path = require('path');
const createComment = require('./createComment');
const getAllComments = require('./getAllComments');
const getSingleComment = require('./getSingleComment');
const updateCommentContent = require('./updateCommentContent');
const deleteSingleComment = require('./deleteSingleComment');
const flagComment = require('./flagComment');
const getCommentVotes = require('./getCommentVotes');
const upvoteSingleComment = require('./upvoteSingleComment');
const downvoteSingleComment = require('./downvoteSingleCommnent');

module.exports = {
  createComment,
  getAllComments,
  getSingleComment,
  updateCommentContent,
  deleteSingleComment,
  flagComment,
  getCommentVotes,
  upvoteSingleComment,
  downvoteSingleComment,
};
