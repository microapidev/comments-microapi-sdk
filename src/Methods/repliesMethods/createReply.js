const rp = require('./node_modules/request-promise');

const createReply = async (token, commentId, replyObject) => {
  if (!replyObject.userId && !replyObject.content) {
    return 'UserId and Comment Content Required';
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: {
      ownerId: replyObject.userId,
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
