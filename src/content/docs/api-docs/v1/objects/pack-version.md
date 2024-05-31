---
title: Pack Version Object
pagefind: false
---

A Pack Version Object is an object returned from the API which contains information about a pack's version. The details
about what data it provides is listed below.

## Returned Data (Represented by $object)

| Name                      | Type    | Description                                   |
| :------------------------ | :------ | :-------------------------------------------- |
| $object->version          | string  | The Version                                   |
| $object->minecraftVersion | string  | The Minecraft Version                         |
| $object->recommended      | boolean | If this version is recommended or not         |
| $object->published        | int     | The unixtime this version was published       |
| $object->serverZipURL     | string  | URL to download the server zip (if available) |
| $object->changelog        | string  | The changelog for this version                |
