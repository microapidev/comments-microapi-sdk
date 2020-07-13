const rp = require('request-promise');

const createComment = async (params, content) => {
  var options = {
    uri: 'https://comment.microapi.dev/v1/comments',
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
    const createResponse = await rp(options);
    return createResponse;
  } catch (error) {
    return error.message;
  }
};

export default createComment;
