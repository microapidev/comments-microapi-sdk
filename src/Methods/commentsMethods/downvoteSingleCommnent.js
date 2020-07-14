const rp = require('request-promise');

const downvoteSingleComment = async (params, commentId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/votes/downvote`,
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
    const downvoteResponse = await rp(options);
    return downvoteResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = downvoteSingleComment;
