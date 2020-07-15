const path = require('path');
const createReply = require(path.join(__dirname, 'createReply.js'));
const getAllReplies = require(path.join(__dirname, 'getAllReplies.js'));
const getSingleReply = require(path.join(__dirname, 'getSingleReply.js'));
const updateReplyContent = require(path.join(
  __dirname,
  'updateReplyContent.js'
));
const deleteSingleReply = require(path.join(__dirname, 'deleteSingleReply.js'));
const flagReply = require(path.join(__dirname, 'flagReply.js'));
const getReplyVotes = require(path.join(__dirname, 'getReplyVotes.js'));
const upvoteSingleReply = require(path.join(__dirname, 'upvoteSingleReply.js'));
const downVoteSingleReply = require(path.join(
  __dirname,
  'downVoteSingleReply.js'
));

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
