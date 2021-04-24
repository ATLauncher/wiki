# Pack Version Array

A Pack Version Array is an array returned from the API which contains simple information about a packs published
version. The details about what data it provides is listed below.

## Returned Data (Represented by $array)

| Name                | Type   | Description                                  |
| :------------------ | :----- | :------------------------------------------- |
| $array["version"]   | string | The version name of the Pack Version         |
| $array["minecraft"] | string | The Minecraft version of the Pack Version    |
| $array["published"] | int    | The unixtime that this version was published |
| $array["__LINK"]    | string | The URL for this versions page on the API    |
