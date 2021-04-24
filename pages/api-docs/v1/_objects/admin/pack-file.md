# Admin Pack File Object

An Admin Pack File Object is an object returned from the API which contains information about a file/folder stored in
your packs files area. The details about what data it provides is listed below.

## Returned Data (Represented by $object)

| Name              | Type    | Description                                                                 |
| :---------------- | :------ | :-------------------------------------------------------------------------- |
| $object->filename | string  | The filename of the file/folder                                             |
| $object->size     | int     | The size of the file in bytes (won't show up if it's a folder)              |
| $object->md5      | string  | The md5 hash of the file (won't show up if it's a folder)                   |
| $object->path     | string  | The path to the file for use in your XML (won't show up if it's a folder)   |
| $object->file     | boolean | If this object represents a file (will be true) or a folder (will be false) |
| $object->\_\_LINK | string  | The link to this file or folder in the API                                  |
