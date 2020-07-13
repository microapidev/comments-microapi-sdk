const commentSDK = require('../../src/commentSDK');

test('Create a Comment', async () => {
  const appToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbklkIjoiNWYwOGIxYTU0N2ZjNDgwMDE2OTQyNTdmIiwiYWRtaW5JZCI6IjVmMDhhZmYyNDdmYzQ4MDAxNjk0MjU3ZSIsImlhdCI6MTU5NDQwNjUwNCwiZXhwIjoxNTk2OTk4NTA0fQ.d1y-_g1doceufxd8PNJ74vyZrlAwHfoBkKivryEYuuE';
  const newSdk = new commentSDK(appToken, 'me@me.com', '', '');
  newSdk.init();
  const response = await newSdk.getAllComments();
  console.log(response);
});
