# Share Code Object

A Share Code Object is an object returned from the API which contains information about a share code. The details about
what data it provides is listed below.

## Returned Data (Represented by $object)

| Name             | Type   | Description                                       |
| :--------------- | :----- | :------------------------------------------------ | --------------------------------------------------------------- |
| $object->code    | string | The 8 character share code                        |
| $object->pack    | string | The name of the pack this share code is for       |
| $object->version | string | The version of the pack this share code is for    |
| $object->used    | int    | The number of times this share code has been used |
| $object->mods    | array  | An array of [[api:share_code_mod_object           | Share Code Mod Object]] type of all the optional mod's selected |
