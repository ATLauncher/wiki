---
title: Admin Pack Version Object
pagefind: false
---

A Admin Pack Version Object is an object returned from the API which contains information about a pack's version for
pack admins. The details about what data it provides is listed below.

## Returned Data (Represented by $object)

| Name                     | Type    | Description                                                               |
| :----------------------- | :------ | :------------------------------------------------------------------------ |
| $object→name             | string  | The name of the version (only for development versions)                   |
| $object→version          | string  | The Version                                                               |
| $object→minecraftVersion | string  | The Minecraft Version                                                     |
| $object→recommended      | boolean | If this version is recommended or not                                     |
| $object→development      | boolean | If this version is a development version or not                           |
| $object→published        | int     | The unixtime this version was published (only for published versions)     |
| $object→lastEdited       | int     | The unixtime this version was last edited (only for development versions) |
| $object→changelog        | string  | The changelog for this version                                            |
