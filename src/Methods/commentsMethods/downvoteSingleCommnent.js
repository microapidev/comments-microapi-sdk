const rp = require('request-promise');

const downvoteSingleComment = async (token, commentId, ownerId) => {
  if (!ownerId) {
    return `Owner ID must not be empty!`;
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/votes/downvote`,
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
    const downvoteResponse = await rp(options);
    return downvoteResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = downvoteSingleComment;
