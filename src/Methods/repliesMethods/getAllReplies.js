const rp = require('request-promise');

const getAllReplies = async (token, commentId, pageQuery) => {
  console.log(pageQuery);
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    qs: JSON.stringify(pageQuery),
    method: 'GET',
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getRepliesResponse = await rp(options);
    let records = getRepliesResponse.data.records.map((comment) => {
      return comment;
    });
    let pageInfo = getRepliesResponse.data.pageInfo;
    const data = {
      records,
      pageInfo,
    };
    return data;
  } catch (error) {
    return error.message;
  }
};
module.exports = getAllReplies;
