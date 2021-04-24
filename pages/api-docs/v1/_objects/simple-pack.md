# Simple Pack Object

A Simple Pack Object is an object returned from the API which contains simple information about a pack. The details
about what data it provides is listed below.

## Returned Data (Represented by $object)

| Name              | Type   | Description                                            |
| :---------------- | :----- | :----------------------------------------------------- |
| $object->id       | int    | The ID of the Pack                                     |
| $object->name     | string | The Name of the Pack                                   |
| $object->safeName | string | The Safe Name of the Pack for use in API Calls         |
| $object->type     | string | The type of Pack this is (public, semipublic, private) |
| $object->\_\_LINK | string | Link to this pack on the API                           |
