# V2 API

The V2 API is the new API used for interacting with ATLauncher. It's a GraphQL api which allows you to query multiple
things, as well as query for just the information you want.

## Please Note

This is a beta at this point in time. The api structure and queries/mutation may change at any point in time. While we
try to avoid it, it may happen. Keep an eye out on the docs and schema in the playground at
[https://api.atlauncher.com/v2/graphql/playground](https://api.atlauncher.com/v2/graphql/playground).

## Access Levels

There are 2 different types of access levels available from the API. There is a public access level and pack developer
access level.

### Public Access Level

This access level is available to all and doesn't need an API key to access. Information supplied to the Public Access
Level is limited and there are lower request allowances.

### Pack Developer Access Level

This access level is available to Pack Developers only and requires an API key to access, which can be obtained in your
Settings page of the Admin Panel. Pack Developers will have higher request allowances.

## Request Allowances

Each level of access is limited by the number of requests they can make in a certain time period. In order to not reach
these limits, make sure you're caching data and not fetching too often. Once your limit has been reached, you will
receive a **429** response code and will be unable to do anything until the minute since your first request is up,
which you can find a unix timestamp of when your time resets in the response headers. Below you can find a table
listing the different request restrictions in place:

| Access Level   | Max Requests Per Minute |
| :------------- | :---------------------- |
| Public         | 60                      |
| Pack Developer | 300                     |

## Rate Limiting Headers

Every request includes 4 headers to give you information about your rate limiting including the number of requests made,
left and time until you can make more. See the table below for information on the headers:

| Header Name           | What It's For                                                                                                         |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Retry-After           | This is how many seconds to wait until you should retry your request when you hit rate limits                         |
| X-RateLimit-Remaining | This is the number of API calls you have left based upon your rate limiting                                           |
| X-RateLimit-Limit     | This is your rate limit and is the maximum amount of API calls you can make within a set time limit (see above table) |
| X-RateLimit-Reset     | This is a unix timestamp for when your rate limiting will reset                                                       |

## Complexity Limits

When you query for information, you're limited by the complexity of your query. Each item of data that you retrieve will
be added to the complexity score.

All queries have a complexity limit of **200** and going over that will return an error and not run your query,

When crafting queries, be sure to only request the information you actually need in order to keep the query complexity
down.

## How To Make An API Call

To make an API call, you simple need to make a POST call to
[https://api.atlauncher.com/v2/graphql/](https://api.atlauncher.com/v2/graphql/) with the appropriate body. We have a
playground setup that you can use to see the docs, schema as well as play around and figure out how to write and send
queries to the api. Visit
[https://api.atlauncher.com/v2/graphql/playground](https://api.atlauncher.com/v2/graphql/playground).

If you are a pack developer and have an API key, it can be specified by adding a **Authorization** header with the token
as a Bearer token (for instance if your api key is 12345, the header is **Authorization: Bearer 12345**).

All requests to the api must contain a valid useragent. Your useragent should have the name of your software/bot and
ideally some form of contact information (be it a website, Discord username or email) where we can contact you about
your use of the api if there is an issue. Failing to do so may cause your requests to be blocked and potentially your
IP address blocked.

## File Uploads

Some mutations will allow you to upload files along with your request. We do so using the
[GraphQL multipart request specification](https://github.com/jaydenseric/graphql-multipart-request-spec). As an example,
uploading an image the query would be like below, and we'd send through our file as **image** in a multipart upload as
specified in the spec:

```js
mutation UpdatePack($image: Upload) {
    updatePack(
        packId: 3,
        image: $image
    ) {
        id
        name
    }
}
```

Client libraries will handle this for you in a majority of cases anyway so you shouldn't need to worry about the finer
details.

## Packages

Since the api is just a standard GraphQL server, you can use one of the many different GraphQL clients available for
your language of choice. Just make sure the endpoint is set to `https://api.atlauncher.com/v2/graphql`.
