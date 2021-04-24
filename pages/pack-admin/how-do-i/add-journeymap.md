# JourneyMap

ATLauncher has been [given permission by Mark](https://journeymap.info/Modpack_FAQ) for permission to Direct Link to the
downloads of JourneyMap for versions 3.3.2 and later.

Please note that this doesn't mean you can redistribute it, you can only directly link to the provided links on the
[JourneyMap download page](https://www.curseforge.com/minecraft/mc-mods/journeymap/files).

To get the download link, simply find the file you want to use, open up the network tab in the developer tools in your
browser, and download the mod. Check the network tab for a request going to **edge.forgecdn.net** (for instance
[https://edge.forgecdn.net/files/2889/962/journeymap-1.14.4-5.7.0b1.jar](https://edge.forgecdn.net/files/2889/962/journeymap-1.14.4-5.7.0b1.jar)
).

There are multiple redirects when downloading a mod, you want to make sure you grab the one that is
**edge.forgecdn.net**.

## Example XML

This is an example of setting up JourneyMap to download directly from CurseForge.

```xml
<mod
    name="JourneyMap"
    version="5.7.0b1"
    url="https://edge.forgecdn.net/files/2889/962/journeymap-1.14.4-5.7.0b1.jar"
    download="direct"
/>
```
