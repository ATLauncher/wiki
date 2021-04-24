# How Do I... Add Ruins

Adding Ruins mod by AtomicStryker is a simple process.

## Step 1: Add The Mod

First you need to upload the mod (given you have permissions to do so) to your files section and get the XML code for
the mod. Once pasted into your XML you need to do a couple things.

First the type of the mod needs to be "extract" and we need to setup a couple things to tell the Launcher how and what
to extract out the zip.

Firstly the extractto="" will allow you to setup the place the files will be extracted to. In this case we want the mods
folder so set extractto to be "mods"

Secondly we need to extract the contents of a folder inside the zip to the mods folder. For this we use extractfolder
and set it to "setup%s%mods%s%" which will put all the contents from the setup/mods/ folder in the zip into the place
we specified with extractto earlier.

So once that's done you should have this in your XML for the Ruins mod.

`type="extract" extractto="mods" extractfolder="setup%s%mods%s%"`

## Step 2: Test

That's it, just test and enjoy. This was accurate for version 1.6.4 of the mod and may not be accurate for future
versions.
