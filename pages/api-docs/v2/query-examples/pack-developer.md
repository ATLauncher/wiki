# V2 API Pack Developer Examples

This page contains some example queries for the V2 GraphQL api. These are intended to be examples and as such may or may
not be up to date. Check the [GraphQL Playground](https://api.atlauncher.com/v2/graphql) for up to date documentation
and schema.

## Login

This mutation will allow you to login with your credentials in order to get an access token to use with the api. This
can be used instead of your API token if you so wish.

```graphql
mutation Login {
    login(input: { username: "username", password: "password" }) {
        accessToken
        message
        refreshToken
        success
    }
}
```
