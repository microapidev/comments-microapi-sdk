const path = require('path');
const createReply = require(path.join(__dirname,'createReply'));
const getAllReplies = require(path.join(__dirname,'getAllReplies'));
const getSingleReply = require(path.join(__dirname,'getSingleReply'));
const updateReplyContent = require(path.join(__dirname,'updateReplyContent'));
const deleteSingleReply = require(path.join(__dirname,'deleteSingleReply'));
const flagReply = require(path.join(__dirname,'flagReply'));
const getReplyVotes = require(path.join(__dirname,'getReplyVotes'));
const upvoteSingleReply = require(path.join(__dirname,'upvoteSingleReply'));
const downVoteSingleReply = require(path.join(__dirname,'downVoteSingleReply'));

module.exports = {
  createReply,
  getAllReplies,
  getSingleReply,
  updateReplyContent,
  deleteSingleReply,
  flagReply,
  getReplyVotes,
  upvoteSingleReply,
  downVoteSingleReply,
};
