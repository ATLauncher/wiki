# Development Pack Version Array

A Development Pack Version Array is an array returned from the API which contains simple information about a packs
development version. The details about what data it provides is listed below.

## Returned Data (Represented by $array)

| Name                 | Type   | Description                                    |
| :------------------- | :----- | :--------------------------------------------- |
| $array["version"]    | string | The version name of the Pack Version           |
| $array["minecraft"]  | string | The Minecraft version of the Pack Version      |
| $array["lastEdited"] | int    | The unixtime that this version was last edited |
| $array["__LINK"]     | string | The URL for this versions page on the API      |
