const rp = require('request-promise');

const downvoteSingleReply = async (params, commentId, replyId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/replies/${replyId}/votes/downvote`,
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
    const downvoteReplyResponse = await rp(options);
    return downvoteReplyResponse;
  } catch (error) {
    return error.message;
  }
};

export default downvoteSingleReply;
