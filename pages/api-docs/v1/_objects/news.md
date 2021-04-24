# News Object

A News Object is an object returned from the API which contains information about a single piece of news for the
launcher. The details about what data it provides is listed below.

## Returned Data (Represented by $object)

| Name               | Type   | Description                                           |
| :----------------- | :----- | :---------------------------------------------------- |
| $object→title      | string | The title of the news item                            |
| $object→content    | string | The content of this news item (in html)               |
| $object→created_at | int    | An ISO 8601 string of when this news item was created |
