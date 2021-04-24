# /admin/pack/[pack name]/versions

This path in the API provides ways to see and edit information about your packs versions. Please note that the pack name
provided in these calls must have all non alphanumeric characters removed and case is sensitive.

## POST /admin/pack/[pack name]/versions

This will create a new version of your pack. Body data provided must be json and conform to the below format:

```json
{
    "name": "dev"
}
```

Note that the **name** attribute must be between 3 and 32 characters long and can only contain alpha numeric characters
as well as underscores, dashes and periods.

This returns a [Admin Pack Version Object](/api-docs/v1/_objects/admin/pack-version) containing information about the
newly created version.

## GET /admin/pack/[pack name]/versions/[version name]

This returns a [Admin Pack Version Object](/api-docs/v1/_objects/admin/pack-version) containing information about this
version. The version name in the url can be either a published versions version or a development versions name.

## DELETE /admin/pack/[pack name]/versions/[version name]

This will delete a version of your pack. The version name in the url can be either a published versions version or a
development versions name.

## GET /admin/pack/[pack name]/versions/[version name]/xml

This returns the xml for this version of the pack.

## PUT /admin/pack/[pack name]/versions/[version name]/xml

This sets the XML for this version of the pack. Data provided must be a
[JSON Data String](/api-docs/v1/_objects/json-data-string) of the xml which has been base64 encoded. If the XML you sent
wasn't valid, the API will return a 406 error and an array of issues found with the XML.

## GET /admin/pack/[pack name]/versions/[version name]/json

This returns the json for this version of the pack.

## GET /admin/pack/[pack name]/versions/[version name]/configs

This returns the configs for this version of the pack which have been base64 encoded. Warning, this could end up being a
very large response (up to 5MB) so be wary of that.

## PUT /admin/pack/[pack name]/versions/[version name]/configs

This sets the configs for this version of the pack. Data provided must be a
[JSON Data String](/api-docs/v1/_objects/json-data-string) of the configs which have been base64 encoded.

## POST /admin/pack/[pack name]/versions/[version name]/curse-import

This will process a curse import zip file for this version of the pack. The request must be sent as form data:

| Field Name      | Description                                                                                                                            |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| file            | The Curse zip file                                                                                                                     |
| folder          | The folder to upload all files to. Use "**0**" to create a new folder for the import. Using "**/**" will upload to the root directory. |
| keepMissingMods | If custom mods not in the zip file should be kept.                                                                                     |

Note that this call may take up to 60 seconds to process. If it takes longer or the request errors out, then send the
request again.

This returns a [Admin Pack Version Curse Import Object](/api-docs/v1/_objects/admin/pack-version-curse-import)
containing information about the import.

## POST /admin/pack/[pack name]/versions/[version name]/changelog

This will create a new version of your pack. Body data provided must be json and conform to the below format:

```json
{
    "changelog": "My changelog\n\nNice changes"
}
```

This returns a [Admin Pack Version Object](/api-docs/v1/_objects/admin/pack-version) containing information about the
version with the updated changelog.

## POST /admin/pack/[pack name]/versions/[version name]/publish

This will publish a development version of your pack. Body data provided must be json and conform to the below format:

```json
{
    "tweet": 1
}
```

Note that the **tweet** attribute must be either **1** or **0** and if **0** will not tweet out the new pack version.

This returns a [Admin Pack Version Object](/api-docs/v1/_objects/admin/pack-version) containing information about the
newly created published version.
