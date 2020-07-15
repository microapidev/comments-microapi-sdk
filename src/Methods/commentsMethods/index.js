const path = require('path');
const createComment = require(path.join(__dirname, 'createComment.js'));
const getAllComments = require(path.join(__dirname, 'getAllComments.js'));
const getSingleComment = require(path.join(__dirname, 'getSingleComment.js'));
const updateCommentContent = require(path.join(
  __dirname,
  'updateCommentContent.js'
));
const deleteSingleComment = require(path.join(
  __dirname,
  'deleteSingleComment.js'
));
const flagComment = require(path.join(__dirname, 'flagComment.js'));
const getCommentVotes = require(path.join(__dirname, 'getCommentVotes.js'));
const upvoteSingleComment = require(path.join(
  __dirname,
  'upvoteSingleComment.js'
));
const downvoteSingleComment = require(path.join(
  __dirname,
  'downvoteSingleCommnent.js'
));

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
