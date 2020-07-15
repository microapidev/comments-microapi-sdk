const rp = require('./node_modules/request-promise');

const createComment = async (token, commentObject) => {
  if (!commentObject.userId && !commentObject.content) {
    return 'UserId and Comment Content Required';
  }
  var options = {
    uri: 'https://comment.microapi.dev/v1/comments',
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: {
      ownerId: commentObject.userId,
      content: commentObject.content,
      refId: commentObject.refId,
      origin: commentObject.origin,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const createResponse = await rp(options);
    return createResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = createComment;
