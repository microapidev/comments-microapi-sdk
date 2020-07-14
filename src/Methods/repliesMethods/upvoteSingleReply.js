const rp = require('request-promise');

const upvoteSingleReply = async (params, commentId, replyId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/replies/${replyId}/votes/upvote`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'PATCH',
    body: {
      ownerId: params.ownerId,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const upvoteReplyResponse = await rp(options);
    return upvoteReplyResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = upvoteSingleReply;
