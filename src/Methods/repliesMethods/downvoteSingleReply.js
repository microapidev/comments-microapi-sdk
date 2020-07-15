const rp = require('request-promise');
require('dotenv').config();

const downvoteSingleReply = async (token, commentId, replyId, userId) => {
  if (!userId) {
    return `User ID must not be empty!`;
  }
  var options = {
    uri: `${process.env.BaseUrl}/v1/comments/${commentId}/replies/${replyId}/votes/downvote`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
    body: {
      ownerId: userId,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const downvoteReplyResponse = await rp(options);
    return downvoteReplyResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = downvoteSingleReply;
