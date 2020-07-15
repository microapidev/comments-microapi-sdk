const rp = require('request-promise');
require('dotenv').config();

const getReplyVotes = async (token, commentId, replyId) => {
  var options = {
    uri: `${process.env.BaseUrl}/v1/comments/${commentId}/replies/${replyId}/votes`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getReplyVoteResponse = await rp(options);
    return getReplyVoteResponse;
  } catch (error) {
    return error.message;
  }
};
module.exports = getReplyVotes;
