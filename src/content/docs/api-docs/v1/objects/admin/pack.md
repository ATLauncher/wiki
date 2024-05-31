---
title: Admin Pack Object
---

A Admin Pack Object is an object returned from the API which contains information about a pack for admins. The details
about what data it provides is listed below.

## Returned Data (Represented by $object)

| Name                 | Type   | Description                                                                                                                                                                |
| :------------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $object->id          | int    | The ID of the Pack                                                                                                                                                         |
| $object->name        | string | The Name of the Pack                                                                                                                                                       |
| $object->safeName    | string | The Safe Name of the Pack for use in API Calls                                                                                                                             |
| $object->type        | string | The type of Pack this is (public, semipublic, private)                                                                                                                     |
| $object->versions    | array  | Array of types [Pack Version Array](/api-docs/v1/objects/pack-version-array) for the Published Versions of the Pack ordered by time published                             |
| $object->devVersions | array  | Array of types [Development Pack Version Array](/api-docs/v1/objects/development-pack-version-array) for the Development Versions of the Pack ordered by time last edited |
| $object->description | string | The description of the Pack                                                                                                                                                |
| $object->supportURL  | string | The support URL of the Pack                                                                                                                                                |
| $object->websiteURL  | string | The website URL of the Pack                                                                                                                                                |
