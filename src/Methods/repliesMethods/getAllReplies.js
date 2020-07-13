const rp = require('request-promise');

const getAllReplies = async (params) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'GET',
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getRepliesResponse = await rp(options);
    return getRepliesResponse;
  } catch (error) {
    return error.message;
  }
};

export default getAllReplies;
