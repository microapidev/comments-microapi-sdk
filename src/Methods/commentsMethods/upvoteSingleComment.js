const rp = require('request-promise');

const upvoteSingleComment = async (token, commentId, ownerId) => {
  if (!ownerId) {
    return `Owner ID must not be empty!`;
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/votes/upvote`,
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
    const upvoteResponse = await rp(options);
    return upvoteResponse;
  } catch (error) {
    return error.message;
  }
};
module.exports = upvoteSingleComment;
