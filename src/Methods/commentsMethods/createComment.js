const rp = require('request-promise');

const createComment = async (token, commentObject) => {
  if (!commentObject.ownerId && !commentObject.content) {
    return new Error('Owner ID and Comment Content Required');
  } else {
    var options = {
      uri: `https://comments-microservice.herokuapp.com/v1/comments`,
      headers: {
        'User-Agent': 'Request-Promise',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: {
        ownerId: commentObject.ownerId,
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
  }
};

module.exports = createComment;
