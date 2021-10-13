# Delete

This part of the XML deals with the deletion of files and folders when a pack is updated or reinstalled. When a user
reinstalls or updates your pack, the launcher auto deletes the mods/, configs/ and bin/ folders. This section will allow
you to add to that list of folders/files to delete.

## XML Syntax

```xml
<delete>
    <file base="root" target="filepath" />
    <folder base="root" target="folderpath" />
</delete>
```

## How To Use

The contents of the `<delete></delete>` tag can contain as many `<file />` or `<folder />` instances as you need. Each
tag contains 2 elements. These tags should go directly after the `<pack></pack>` tags.

### base=""

This specifies the area which the file/folder resides in. Please see below for the valid types of this tag and what it means.

#### base="root"

This looks for the file/folder to delete in the root folder of the Instance where the mods/ and configs/ folders are for
example.

### target=""

This specifies the target of the deletion. If the tag is a `<file />` tag it will delete this one file. If it is a
`<folder />` tag it will delete the folder. Please note that all slashes for directories need to be replaces with `%s%`
and there must be a trailing `%s%`. For example `target="test/test/"` is incorrect and `target="test%s%test%s%"` is
correct.

## Example

If you have MineTweaker installed for example, you will want to delete the scripts folder in the root directory on each
update as to not cause conflicts/issues. See below for an example on how to do that.

This can be applied for any folder which the launcher doesn't delete normally (mods, configs, bin, jarmods) but you
install into the root.

```xml
<delete>
    <file base="root" target="changelog.txt" />
    <folder base="root" target="flans%s%content%s%" />
    <folder base="root" target="scripts%s%" />
</delete>
```
