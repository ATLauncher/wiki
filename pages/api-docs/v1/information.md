# V1 API

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

## How To Make An API Call

To make an API call, you simple need to make a call to
[https://api.atlauncher.com/v1/](https://api.atlauncher.com/v1/) with the appropriate path to what information your
looking for. More information can be found throughout this API and in it's sub sections. If you are a pack developer
and have an API Key, it must be specified by adding a Authorization header with the token as a Bearer token (for
instance if your api key is 12345, the header is **Authorization: Bearer 12345**). Alternatively you can add in a query
param or form param of **api_token**.

All requests to the api must contain a valid useragent. Your useragent should have the name of your software/bot and
ideally some form of contact information (be it a website, Discord username or email) where we can contact you about
your use of the api if there is an issue. Failing to do so may cause your requests to be blocked and potentially your IP
address blocked.

We provide RESTful functions using the GET, POST, PUT and DELETE headers.

## Basic Returned Information

All requests to the API will return 4 things in an object encoded in JSON. $object is used to reference the decoded JSON
string returned from the API.

| Name            | Type    | Description                                                                                                                                                                                                |
| :-------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $object→error   | boolean | If there was an error, this will return true, else it will be false                                                                                                                                        |
| $object→code    | int     | The response code for the call                                                                                                                                                                             |
| $object→message | varies  | A string containing the error message, if any, else will be null                                                                                                                                           |
| $object→data    | varies  | This is the Data returned from a successful API call. Will be null if there was an error,else will contain an object, array or string depending on the call. See the specific page for what it will return |

## \_\_ Variables & Links

Some API calls have special variables starting with 2 underscores (\_\_) which are special. Most notably the \_\_LINK
variable provides the URL to the given objects API path. Be it a version listing or a pack listing, this will provide
you with a simple way to find the way to get more information about the given object you have received.

## Packages

There are some packages you can use to make working with our API much easier for different programming languages. While
this is a short list at the moment, if you write a package for a language to work with our API, please let us know by
[contacting us](https://atlauncher.com/contact-us) so we can add it to this list.

Please note this list contains unofficial packages and we cannot always guarantee they will keep updated or work as
expected.

| Language           | Link                                                         |
| :----------------- | :----------------------------------------------------------- |
| Node.js (Official) | [Link](https://www.npmjs.com/package/atlauncher-api)         |
| Java               | [Link](https://github.com/UnoLauncher/ATLauncher-API---Java) |
| C#                 | [Link](https://github.com/hypherionmc/ATLauncherAPI-Sharp)   |

## Where To Go From Here?

Please look in the sidebar for a list of categories relating to the API and what methods are available.
