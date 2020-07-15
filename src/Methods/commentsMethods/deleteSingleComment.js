const rp = require('request-promise');

const deleteSingleComment = async (params, commentId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'DELETE',
    body: {
      ownerId: params.ownerId,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const deleteResponse = await rp(options);
    return deleteResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = deleteSingleComment;
