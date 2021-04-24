# Libraries

The libraries section of the XML tells the launcher the libraries needed in order to run. In general you should never
need to manually add in libraries when using [loaders](/pack-admin/_xml/loaders), other mods/libraries may require
libraries. The only such known and used case of that is Liteloader.

If you do need to add in libraries, see the syntax below:

## XML Syntax

```xml
<libraries>
    <library
        url="packs/Test/files/libraries/library-2.0.jar"
        download="server"
        file="library-2.0"
        md5="067cd2ab373ba916c62a9b2e5e2eb777"
        server="net/library/2.0/library-2.0"
        path="net/library/2.0/library-2.0"
    />
</libraries>
```
