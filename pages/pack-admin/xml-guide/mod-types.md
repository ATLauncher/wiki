# Mod Types

The type="" attribute for each of the mods in your pack tells the ATLauncher how to deal with the mod and how to install
it. Some mod types contain extra attributes which must be added to your `<mod />` declaration in order for it to work.

The ATLauncher admin website doesn't check to make sure these work, so you must make sure and test yourself to make sure
they work and install correctly.

## Minecraft Forge

**NOTE:** the forge mod type is now deprecated. You shouldn't be using this going forward, and instead should be making
use of [loaders](/pack-admin/_xml/loaders).

Specifies that this mod file is Minecraft Forge and should be installed in the Jar or placed in the Root directory for
Minecraft >1.6 server installs.

`type="forge"`

## Jar Mods

Specifies that this mod file should be extracted into the minecraft.jar file.

`type="jar"`

## Normal Mods

Specifies that this mod file should be placed into the 'mods' folder. This is what most mods will use as their type.

`type="mods"`

## Flans Mod Addons

Specifies that this mod file should be placed into the 'Flan' folder.

`type="flan"`

## Dependency Mods

Specifies that this mod file should be placed into the 'mods/(MC Version)/' folder, for instance for Minecraft 1.6.4 it
would install in the 'mods/1.6.4/' folder. This generally includes CodeChickenLib, WorldCore and ForgeMultiPart. Please
note that's not a complete list and may include more mods and all mods may not all apply to your pack.

`type="dependency"`

## IC2 Library

Specifies that this mod file should be placed into the 'mods/ic2/' folder. This is used at the moment only for adding
the EJML library that IC2 externally downloads when started up. This is not a specific type just for the mod IC2.

`type="ic2lib"`

## Den Library

Specifies that this mod file should be placed into the 'mods/denlib/' folder. This is used at the moment only for adding
the SQLite JDBC library that denLib externally downloads when started up. This is not a specific type just for the mod
denLib.

`type="denlib"`

## Coremods

Specifies that this mod file should be placed into the 'coremods' folder. Only mods that say they should be a coremod,
will go in this folder.

`type="coremods`

## MCPC

Specifies that this mod file is MCPC and should be used as the main server jar.

`type="mcpc"`

## Plugins

Specifies that this mod file should be placed into the 'plugins' folder for MCPC

`type="plugins"`

## Extract

Specifies that this mod file should be extracted and it's contents stored somewhere.

`type="extract"`

### Extract to

Specifies where the extracted contents should go. It can be one either:

`extractto="root"</code> This will extract into the .minecraft/ `

`extractto="mods"</code> Puts the files in the mods/ `

`extractto="coremods"</code> Puts the files in the coremods/ `

### Extract Folder

Specifies which folder within the extracted file that should be acted upon. Any folder slashes should be replaced with
`%s%`, so for instance if there is a folder in the zip file called SomeMod/Put In Mods Folder/ which contains all the
files which need to go in the mods folder then you would have `extractfolder="SomeMod%s%Put In Mods Folder%s%"`.
A trailing `%s%` should always be added.

`extractfolder=""`

## Decomp

Specifies that the file should be extracted and it's contents acted upon. This is a more advanced version of the
'extract' type and allows you to specify which file from the extracted contents to work with and what to do with it.

`type="decomp"`

### decompfile

Specifies the file from the extracted contents to work with

`decompfile=""`

### decomptype

Specifies the action to perform on the file specified above. This can be either jar, mods or coremods.

`decomptype=""`
