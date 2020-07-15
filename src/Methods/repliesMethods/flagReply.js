const rp = require('request-promise');

const flagReply = async (token, commentId, replyId, userId) => {
  if (!userId) {
    return `User ID must not be empty!`;
  }
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/replies/${replyId}/flag`,
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
    const flagReplyResponse = await rp(options);
    return flagReplyResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = flagReply;
