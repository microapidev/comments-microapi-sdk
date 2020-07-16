const createReply = require('./createReply');
const getAllReplies = require('./getAllReplies');
const getSingleReply = require('./getSingleReply');
const updateReplyContent = require('./updateReplyContent');
const deleteSingleReply = require('./deleteSingleReply');
const flagReply = require('./flagReply');
const getReplyVotes = require('./getReplyVotes');
const upvoteSingleReply = require('./upvoteSingleReply');
const downvoteSingleReply = require('./downvoteSingleReply');

module.exports = {
  createReply,
  getAllReplies,
  getSingleReply,
  updateReplyContent,
  deleteSingleReply,
  flagReply,
  getReplyVotes,
  upvoteSingleReply,
  downvoteSingleReply,
};
