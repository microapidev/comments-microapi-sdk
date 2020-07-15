const path = require('path');
const createReply = require('./createReply');
const getAllReplies = require('./getAllReplies');
const getSingleReply = require('./getSingleReply');
const updateReplyContent = require('./updateReplyContent');
const deleteSingleReply = require('./deleteSingleReply');
const flagReply = require('./flagReply');
const getReplyVotes = require('./getReplyVotes');
const upvoteSingleReply = require('./upvoteSingleReply');
const downVoteSingleReply = require('./downVoteSingleReply');

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
