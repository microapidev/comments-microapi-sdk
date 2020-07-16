const rp = require('request-promise');

const createReply = async (token, commentId, replyObject) => {
  if (!replyObject.ownerId && !replyObject.content) {
    return 'ownerId and Comment Content Required';
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies`,
    headers: {
      'owner-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: {
      ownerId: replyObject.ownerId,
      content: replyObject.content,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const createReplyResponse = await rp(options);
    return createReplyResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = createReply;
