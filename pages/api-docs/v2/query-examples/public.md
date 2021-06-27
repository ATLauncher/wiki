# V2 API Public Examples

This page contains some example queries for the V2 GraphQL api. These are intended to be examples and as such may or may
not be up to date. Check the [GraphQL Playground](https://api.atlauncher.com/v2/graphql) for up to date documentation
and schema.

## Check Rate Limiting

This query will check your rate limiting status, including the cost for the current query.

```graphql
query {
    rateLimit {
        cost
        limit
        queryLimit
        remaining
        resetsIn
    }
}
```

## GetPacksWithLatestVersion

```graphql
query GetPacksWithLatestVersion {
    packs(first: 10) {
        id
        position
        name
        safeName

        latestVersion {
            id
            version
            minecraftVersion
            changelog
            isRecommended
            canUpdate
            createdAt
            updatedAt
            publishedAt
        }
    }
}
```

## SearchForPackByName

```graphql
query SearchForPackByName {
    searchPacks(first: 10, query: "Test", field: NAME) {
        id
        position
        name
        safeName
        latestVersion {
            id
            version
            minecraftVersion
            changelog
            isRecommended
            canUpdate
            createdAt
            updatedAt
            publishedAt
        }
    }
}
```

## GetPackBySafeName

```graphql
query GetPackBySafeName {
    pack(safeName: "TestPack") {
        id
        position
        name
        safeName

        latestVersion {
            id
            version
            minecraftVersion
            changelog
            isRecommended
            canUpdate
            createdAt
            updatedAt
            publishedAt
        }
    }
}
```
