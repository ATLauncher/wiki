---
title: /v1/admin/pack/[pack name]/files
---

This path in the API provides ways to see and edit information about your packs files. Please note that the pack name
provided in these calls must have all non alphanumeric characters removed and case is sensitive.

## GET /admin/pack/[pack name]/files/[folder name]

This returns an array of [Admin Pack File Object](/api-docs/v1/objects/admin/pack-file) containing information about
all the files in the given folders name. If no folder name is given, you will get the files for the root (/) path of
your packs files. If you call '/admin/pack/[pack name]/files/test/folder/' for example, you'll get all the files in
that (/test/folder/) path.

Files are sorted in alphabetical order.

## GET /admin/pack/[pack name]/file/[folder name]/[file name]

This will return a base64 encoded string representing the file given in the folder given for the pack. Warning, this may
return a very large response (up to 120 MB) so please be wary of this before making the call. If the file doesn't exist
the API will return an error.

## PUT /admin/pack/[pack name]/file/[folder name]/[file name]

This uploads a file to the given folder with the given file name. Data provided must be a
[JSON Data String](/api-docs/v1/objects/json-data-string) of the file which has been base64 encoded. If the file exists
the API will return an error.

If the file is uploaded then it will return a [Admin Pack File Object](/api-docs/v1/objects/admin/pack-file) for the
file.

## DELETE /admin/pack/[pack name]/file/[folder name]/[file name]

This will delete the given file in the given folder for the pack. If the file doesn't exist the API will return an
error.
