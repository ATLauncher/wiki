# /admin/pack

This path in the API provides information about your individual packs. Please note that the pack name provided in these
calls must have all non alphanumeric characters removed and case is sensitive.

## GET /admin/pack/[pack name]

This returns a [Admin Pack Object](/api-docs/v1/_objects/admin/pack) containing simple information about the pack.

## POST /admin/pack/[pack name]/image

This will change the image for the pack. The request must be sent as form data:

| Field Name | Description                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------ |
| image      | The image for the pack. Must be png format with size of 300x150 and a maximum size of 100KB |

This returns a [Admin Pack Object](/api-docs/v1/_objects/admin/pack) for the pack.
