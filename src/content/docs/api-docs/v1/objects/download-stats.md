---
title: Download Stats Object
---

A Download Stats Object is an object returned from the API which contains information about all the downloads the
launcher has had. The details about what data it provides is listed below.

## Returned Data (Represented by $object)

| Name         | Type | Description                              |
| :----------- | :--- | :--------------------------------------- |
| $object->all | int  | The number of downloads overall          |
| $object->exe | int  | The number of downloads for Windows      |
| $object->jar | int  | The number of downloads for Linux/Others |
| $object->zip | int  | The number of downloads for Mac OSX      |
