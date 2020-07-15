const CommentSDK = require('../../src/commentSDK');

describe('Create new comment', () => {
  it('should create a Comment', async () => {
    const commentObject = {
      userId: 'me@me.com',
      content: 'This is a comment',
    };
    const newSdk = new CommentSDK(global.appToken);
    newSdk.init();
    expect(newSdk.appToken).toEqual(global.appToken);
    const newComment = await newSdk.createComment(commentObject);
    console.log(newComment);
    expect(newComment.data.content).toEqual(commentObject.content);
    expect(newComment.data.ownerId).toEqual(commentObject.userId);
    expect(newComment.status).toEqual('success');
  });

  it('should return error for invalid token', async () => {
    const appToken = 'wrongToken';
    const newSdk = new CommentSDK(appToken);
    await newSdk.init();
    expect(Error).toBeTruthy();
  });
});
