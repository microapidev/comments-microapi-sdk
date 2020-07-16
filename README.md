# Overview
Having to use an API and making ```HTTP REQUESTS``` can be a bit of a task.
Instead of making these `HTTP` calls, this SDK is being built to wrap all endpoints into simple functions.

Provided you have a valid token signed and gotten from [Micro Api - Comments Microservice](https://comment.microapi.dev) you can easily make use of the comments microservice via writing simple functions.

Don't worry about `HTTP Requests`, we got you!!

## About Comments Microservice
The Comment Microservice gives the developer access to built-in functionalities for when they want to implement comments and replies within their own application.

Basic functionalities are available for creation, update, and deletion of comments and replies while ensuring that only users authorized are allowed to use such functionalities.

Additionally, there are extra features such as filtering, sorting, voting, and flagging available.

## About SDK Package
The Comment Microservice SDK gives developers more flexiblily in using the service.

v2.0.5

## Get Started
- Visit [Comments Microservice Homepage](https://comment.microapi.dev/)
- Register an Organization to get access token
- Create an app using the organization token to get an application token. The application token will be used to authorize your requests for comments and replies
- Run `npm install comments-microapi-sdk`
- Use the application token to create an instance of the SDK
- Initialize SDK via `sdkInstance.init()`
- Flex your muscles with the SDK Functions at [Documentation]

```
//require package from npm
const csdk = require("comments-microapi-sdk");

//create an instance of the sdk
const newSDKInstance = new csdk(appToken);

//initialize sdk
newSDKInstance.init();

//returns a promise .. make this call in an `async` function or use `.then()`
const createCommentResponse = newSDKInstance.createComment({ownerId,content,refId,origin});

console.log(createCommentResponse);


```