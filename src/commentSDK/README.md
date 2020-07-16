# Get Started with the SDK Functions (Quick Documentations)

### Setup

- Install package into your project. Run in terminal `npm i comments-microapi-sdk`
- Require package where you need it.
- - `const csdk = require("comments-microapi-sdk");`
- Instantiate `csdk`
- - `const newSDKInstance = new csdk(appToken);`
- Initialize new instance `newSDKInstance.init();`
- Using instance created make function calls

## Comments Methods

Note: All methods returns Promises

### Create a New Comment

    - Parameter: commentObject (required) [commentObject = {ownerId,content,refId(optional),origin(optional)}]
    - method : createComment(commentObject);

### Get Single Comment

    - Parameter: commentId(required)
    - method : getSingleComment(commentId);

### Get All Comments

    - Parameter: pageQuery(optional) [pageQuery = {limit,page,origin,refId}]
    - method : getAllComments(pageQuery);

### Delete Single Comment

    - Parameter: commentId, ownerId (required)
    - method : deleteSingleComment(commentId,ownerId);

### Update Comment Content

    - Parameter: commentId, updateObject (required) [updateObject = {ownerId, content}]
    - method : flagComment(commentId,ownerId);

### Flag Single Comment

    - Parameter: commentId, ownerId (required)
    - method : flagComment(commentId,ownerId);

### Upvote Single Comment

    - Parameter: commentId, ownerId (required)
    - method : upvoteSingleComment(commentId,ownerId);

### Downvote Single Comment

    - Parameter: commentId, ownerId (required)
    - method : downvoteSingleComment(commentId,ownerId);

### Get Comment Votes

    - Parameter: commentId(required)
    - method : getCommentVotes(commentId);

## Replies Methods

Note: All methods returns Promises

### Create a New Reply

    - Parameter: commentId, replyObject (required) [commentObject = {ownerId,content,refId(optional),origin(optional)}]
    - method : createReply(commentId, replyObject);

### Get Single Reply

    - Parameter: commentId,replyId,(required)
    - method : getSingleReply(commentId,replyId);

### Get All Replies

    - Parameter: commentId,pageQuery(optional) [pageQuery = {limit,page,origin,refId}]
    - method : getAllReplies(commentId,pageQuery);

### Delete Single Reply

    - Parameter: commentId,replyId, ownerId (required)
    - method : deleteSingleReply(commentId,replyId,ownerId);

### Update Reply Content

    - Parameter: commentId,replyId, updateObject (required) [updateObject = {ownerId, content}]
    - method : updateReplycontent(commentId,replyId,ownerId);

### Flag Single Reply

    - Parameter: commentId, replyId,ownerId (required)
    - method : flagReply(commentId,replyId,ownerId);

### Upvote Single Reply

    - Parameter: commentId,replyId, ownerId (required)
    - method : upvoteSingleReply(commentId,replyId,ownerId);

### Downvote Single Reply

    - Parameter: commentId,replyId, ownerId (required)
    - method : downvoteSingleReply(commentId,,replyId,ownerId);

### Get Reply Votes

    - Parameter: commentId,replyId(required)
    - method : getReplyVotes(commentId,replyId);
