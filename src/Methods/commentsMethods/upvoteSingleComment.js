const rp = require('request-promise');

const upvoteSingleComment = async (params, commentId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/votes/upvote`,
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
    const upvoteResponse = await rp(options);
    return upvoteResponse;
  } catch (error) {
    return error.message;
  }
};
module.exports = upvoteSingleComment;
