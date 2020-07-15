const rp = require('request-promise');

const flagComment = async (token, commentId, userId) => {
  if (!userId) {
    return `User ID must not be empty!`;
  }
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/flag`,
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
    const flagResponse = await rp(options);
    return flagResponse;
  } catch (error) {
    return error.message;
  }
};
module.exports = flagComment;
