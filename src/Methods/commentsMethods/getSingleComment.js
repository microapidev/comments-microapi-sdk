const rp = require('request-promise');

const getSingleComment = async (params, commentId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'GET',
        json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getSingleResponse = await rp(options);
    return getSingleResponse;
  } catch (error) {
    return error.message;
  }
};

export default getSingleComment;
