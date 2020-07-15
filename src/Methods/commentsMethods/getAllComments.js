const rp = require('request-promise');
require('dotenv').config();
const getAllComments = async (params) => {
  var options = {
    uri: `${process.env.BaseUrl}/v1/comments`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    query: pageQuery,
    method: 'GET',
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getCommentsResponse = await rp(options);
    return getCommentsResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = getAllComments;
