const rp = require('request-promise');

const updateCommentContent = async (params, commentId,content) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'PATCH',
    body: {
      ownerId: params.ownerId,
      content: content,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const updateResponse = await rp(options);
    return updateResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports =updateCommentContent;
