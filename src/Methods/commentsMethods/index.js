const path = require('path');
const createComment = require(path.join(__dirname, 'createComment'));
const getAllComments = require(path.join(__dirname, 'getAllComments'));
const getSingleComment = require(path.join(__dirname, 'getSingleComment'));
const updateCommentContent = require(path.join(__dirname, 'updateCommentContent'));
const deleteSingleComment = require(path.join(__dirname, 'deleteSingleComment'));
const flagComment = require(path.join(__dirname, 'flagComment'));
const getCommentVotes = require(path.join(__dirname, 'getCommentVotes'));
const upvoteSingleComment = require(path.join(__dirname, 'upvoteSingleComment'));
const downvoteSingleComment = require(path.join(__dirname, 'downvoteSingleCommnent'));

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
