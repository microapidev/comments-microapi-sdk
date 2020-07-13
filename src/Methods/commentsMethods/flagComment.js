const rp = require('request-promise');

const flagComment = async (params, commentId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/flag`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'PATCH',
    body: {
      ownerId: params.ownerId,
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

export default flagComment;
