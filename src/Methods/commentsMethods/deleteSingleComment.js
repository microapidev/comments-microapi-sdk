const rp = require('request-promise');

const deleteSingleComment = async (token, commentId, userId) => {
  if (!userId) {
    return `User ID must not be empty!`;
  }
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
    body: {
      ownerId: userId,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const deleteResponse = await rp(options);
    return deleteResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = deleteSingleComment;
