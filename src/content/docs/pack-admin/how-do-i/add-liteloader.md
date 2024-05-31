---
title: How Do I Add LiteLoader?
---

Adding LiteLoader to your ModPack requires a couple things.

## Step 1: Libraries

First you need to add a library to your `<libraries>` section of your XML. First
[download the installer](https://www.liteloader.com/download) for LiteLoader and run it and use the Extract option and
point it to your Desktop or somewhere you can find the file.

Now you have the file which should look like 'liteloader-1.6.4.jar' for example. Now upload that to your Files section
for your pack and get the Short XML for the file. Now add in this code in your `<libraries></libraries>` tags.

    <library url="" file="" md5="" download="server" />

Where url, file and md5 are from your Files section using the Short XML button.

## Step 2: Extra Arguments

Now you need to modify your `<extraarguments></extraarguments>` tag inside your `<pack></pack>` tags. Simply add the
tweak class that the manual install part of the thread states. In 1.6.4 it is the following:

`--tweakClass com.mumfrey.liteloader.launch.LiteLoaderTweaker`

So your final tag may look like this:

`<extraarguments>--tweakClass=cpw.mods.fml.common.launcher.FMLTweaker --tweakClass com.mumfrey.liteloader.launch.LiteLoaderTweaker</extraarguments>`

## Step 3: Test

That's it, just test and enjoy. This was accurate for version 1.6.4 of the mod and may not be accurate for future versions.
