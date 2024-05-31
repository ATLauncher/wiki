---
title: V2 API
---

The V2 API is the new API used for interacting with ATLauncher. It's a GraphQL api which allows you to query multiple
things, as well as query for just the information you want.

## Please Note

This is a beta at this point in time. The api structure and queries/mutation may change at any point in time. While we
try to avoid it, it may happen. Keep an eye out on the docs and schema in the playground at
[https://api.atlauncher.com/v2/graphql](https://api.atlauncher.com/v2/graphql).

Also as this is still beta, and as usage patterns and abuse is detected, we may change the complexity calculations or
rate limits as we see fit.

## Access Levels

There are 2 different types of access levels available from the API. There is a public access level and pack developer
access level.

### Public Access Level

This access level is available to all and doesn't need an API key to access. Information supplied to the Public Access
Level is limited and there are lower request allowances.

### Pack Developer Access Level

This access level is available to Pack Developers only and requires an API key/access token to access, which can be
obtained in your settings page of the admin panel or logged in with the login mutation. Pack Developers will have higher
request allowances.

For an example of logging into the api to get an access token, see
[this example](/api-docs/v2/query-examples/pack-developer#login).

## Request Allowances

Unlike the v1 api, you don't have a limit on the number of requests you can make, rather the complexity of your queries
within a minute timeframe.

See the section below on [Complexity Limits](#complexity-limits) to get an understanding of how the complexity score is
calculated.

| Access Level   | Points Limit Per Minute | Max Query Complexity |
| :------------- | :---------------------- | :------------------- |
| Public         | 10000                   | 1000                 |
| Pack Developer | 50000                   | 5000                 |

You can query your current rate limits by querying the `rateLimit` field
([example here](/api-docs/v2/query-examples/public#check-rate-limiting)).

## Complexity Limits

When you query for information, you're limited by the complexity of your query. We calculate this based on the number
of nodes that are returned.

All queries have a max complexity limit (depending on your access level) and going over that will return an error and
not run your query. As an example:

```graphql
query {
    packs(first: 10) {
        name

        versions(first: 10) {
            version
            minecraftVersion
        }
    }
}
```

The above query would result in a query complexity of **110**.

Going middle out, we're getting 10 versions for 10 packs, which is **100** total version, plus the **10** packs makes it
a total complexity of **110**.

## Max Query Depth

As well as complexity limits, there is a limit to the depth that your query can go. If your query exceeds **5** levels
of depth, it will not run and return an error.

## How To Make An API Call

To make an API call, you simple need to make a POST call to
[https://api.atlauncher.com/v2/graphql](https://api.atlauncher.com/v2/graphql) with the appropriate body. We have a
playground setup that you can use to see the docs, schema as well as play around and figure out how to write and send
queries to the api. Visit
[https://api.atlauncher.com/v2/graphql](https://api.atlauncher.com/v2/graphql).

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
