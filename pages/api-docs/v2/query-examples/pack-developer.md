# V2 API Pack Developer Examples

This page contains some example queries for the V2 GraphQL api. These are intended to be examples and as such may or may
not be up to date. Check the [GraphQL Playground](https://api.atlauncher.com/v2/graphql/playground) for up to date
documentation and schema.

## UpdatePack

This mutation will allow you to update a pack's details including changing it's description, urls as well as changing
the image for the pack.

```js
mutation UpdatePack($image: Upload) {
    updatePack(
        packId: 3,
        image: $image,
        description: "This is a test",
        websiteUrl: "https://atlauncher.com",
        supportUrl: "https://atlauncher.com",
        discordInviteUrl: "https://atlauncher.com"
    ) {
        id
        position
        name
        safeName
        description
        websiteUrl
        supportUrl
        discordInviteUrl
    }
}
```

## CreatePackVersion

This will create a new development version of your pack.

```js
mutation CreatePackVersion {
    createPackVersion(packId: 3, name: "dev5") {
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
```

## UpdatePackVersion

This will update a version of your pack including updating the changelog and xml.

```jsmutation UpdatePackVersion {
    updatePackVersion(
        packVersionId: 2186
        changelog: "This is a test"
        xml: "<version><pack><version>1.0.0</version><minecraft>1.16.5</minecraft></pack></version>"
    ) {
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
```

## PublishPackVersion

This will publish a version of your pack.

```jsmutation PublishPackVersion {
    publishPackVersion(packVersionId: 2186, tweet: false) {
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
```
