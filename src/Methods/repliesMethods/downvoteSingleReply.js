const rp = require('request-promise');

const downvoteSingleReply = async (token, commentId, replyId, ownerId) => {
  if (!ownerId) {
    return `Owner ID must not be empty!`;
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies/${replyId}/votes/downvote`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
    body: {
      ownerId: ownerId,
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
