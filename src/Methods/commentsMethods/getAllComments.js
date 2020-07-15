const rp = require('request-promise');
require('dotenv').config();
const getAllComments = async (token, pageQuery) => {
  var options = {
    uri: `${process.env.BaseUrl}/v1/comments`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    qs: pageQuery,
    method: 'GET',
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getCommentsResponse = await rp(options);
    let records = getCommentsResponse.data.records.map((comment) => {
      return comment;
    });
    let pageInfo = getCommentsResponse.data.pageInfo;
    const data = {
      records,
      pageInfo,
    };
    return data;
  } catch (error) {
    return error.message;
  }
};

module.exports = getAllComments;
