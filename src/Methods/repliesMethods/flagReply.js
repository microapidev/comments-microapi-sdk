const rp = require('request-promise');

const flagReply = async (token, commentId, replyId, ownerId) => {
  if (!ownerId) {
    return `owner ID must not be empty!`;
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies/${replyId}/flag`,
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
    const flagReplyResponse = await rp(options);
    return flagReplyResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = flagReply;
