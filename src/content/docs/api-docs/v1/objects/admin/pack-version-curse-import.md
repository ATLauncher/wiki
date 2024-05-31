---
title: Admin Pack Version Curse Import Object
---

A Admin Pack Version Curse Import Object is an object returned from the API which contains information about a pack
version's curse import. The details about what data it provides is listed below.

## Returned Data (Represented by $object)

| Name             | Type     | Description                                                                                                                                  |
| :--------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| $object→message  | string   | The message about the status of the import                                                                                                   |
| $object→saved    | boolean  | If the import saved the xml for the pack. If this is false, you'll need to manually save the XML provided taking note of the errors returned |
| $object→xml      | string   | The XML generated (and potentially saved) for the import                                                                                     |
| $object→json     | string   | The JSON generated (if the XML was saved) for the import                                                                                     |
| $object→warnings | string[] | The warnings from the import process (if any)                                                                                                |
| $object→errors   | string[] | The errors from the import process (if any)                                                                                                  |
