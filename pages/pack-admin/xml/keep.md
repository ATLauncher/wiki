# Keep

This part of the XML deals with the saving of files and folders when a pack is updated or reinstalled. When a user
reinstalls or updates your pack, the launcher auto deletes the mods/, configs/ and bin/ folders. The launcher will
automatically keep some files around, including:

  * mods/PortalGunSounds.pak
  * mods/rei_minimap
  * mods/VoxelMods
  * config/NEI.cfg
  * options.txt
  * servers.dat

This section will allow you to save specific files between an update or reinstall of your pack, along with the default
list shown above. Note that you cannot include certain folders such as the saves or world folders, as they are not
touched and by default automatic. This should be used in order to keep files that are created in the mods or config
folder once the pack is run.

## XML Syntax

```xml
<keep>
    <file base="config" target="somefile.txt" />
    <folder base="mods" target="waypoints%s%" />
</keep>
```

## How To Use

The contents of the tag can contain as many or `<folder />` instances as you need. Each tag contains 2 elements.

### base=""

This specifies the area which the file/folder resides in. Please see below for the valid types of this tag and what it
means.

#### base="root"

This looks for the file/folder to keep in the root folder of the Instance where the mods/ and config/ folders are for
example.

#### base="config"

This looks for the file/folder to keep in the config folder of the Instance.

### target=""

This specifies the target of the keep operation. If the tag is a file tag it will keep this one file. If it is a
`<folder />` tag it will keep the entire folder. Please note that all slashes for directories need to be replaced with
`%s%` and there must be a trailing `%s%`. For example `target="test/test/"` is incorrect and `target="test%s%test%s%"`
is correct.

