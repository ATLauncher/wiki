# /pack

This path in the API provides information about individual packs on the Launcher. Please note that the pack name
provided in these calls must have all non alphanumeric characters removed and case is sensitive. Also packs which have
no published versions, will not show here.

## GET /pack/[pack name]

This returns a [Pack Object](/api-docs/v1/_objects/pack) containing simple information about the pack.

## GET /pack/[pack name]/[version name]

This returns the details about the version given, if it exists. It will return a
[Pack Version Object](/api-docs/v1/_objects/pack-version). Using the version name of 'latest' will return a
[Pack Version Object](/api-docs/v1/_objects/pack-version) of the latest version of the pack.
