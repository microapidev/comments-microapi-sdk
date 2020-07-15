const rp = require('request-promise');
require('dotenv').config();

const upvoteSingleComment = async (token, commentId, userId) => {
  if (!userId) {
    return `User ID must not be empty!`;
  }
  var options = {
    uri: `${process.env.BaseUrl}/v1/comments/${commentId}/votes/upvote`,
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
    const upvoteResponse = await rp(options);
    return upvoteResponse;
  } catch (error) {
    return error.message;
  }
};
module.exports = upvoteSingleComment;
