# V2 API Public Examples

This page contains some example queries for the V2 GraphQL api. These are intended to be examples and as such may or may
not be up to date. Check the [GraphQL Playground](https://api.atlauncher.com/v2/graphql/playground) for up to date
documentation and schema.

## GetPacksWithLatestVersion

```js
query GetPacksWithLatestVersion {
    packs {
        data {
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
}
```

## SearchForPackByName

```js
query SearchForPackByName {
    packsSearchName(name: "test%") {
        data {
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
}
```

## GetPackBySafeName

```js
query GetPackBySafeName {
    packBySafeName(safeName: "TestPack") {
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
