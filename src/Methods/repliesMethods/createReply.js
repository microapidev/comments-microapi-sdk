const rp = require('request-promise');

const createReply = async (params, commentId, content) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/replies`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'POST',
    body: {
      ownerId: params.ownerId,
      content: content,
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

export default createReply;
