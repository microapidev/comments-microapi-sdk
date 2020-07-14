const CommentSDK = require('../../src/commentSDK');

describe('Create new comment', () => {
  test('should create a Comment', async () => {
    const newSdk = new CommentSDK(global.appToken, 'me@me.com', '', '');
    newSdk.init();
    expect(newSdk.params.appToken).toEqual(global.appToken);
    const commentContent = 'This is a comment';
    const newComment = await newSdk.createComment(commentContent);
    console.log(newComment);
    expect(newComment.data.content).toEqual(commentContent);
    expect(newComment.data.ownerId).toEqual(newSdk.params.userId);
    expect(newComment.status).toEqual('success');
  });

  test('should return error for invalid token', async () => {
    const appToken = 'wrongToken',
      commentContent = 'This is a comment';
    const newSdk = new CommentSDK(appToken, 'me@me.com', '', '');
    await newSdk.init();
    expect(Error).toBeTruthy();
    const newComment = await newSdk.createComment(commentContent);
    console.log(newComment);
  });
});
