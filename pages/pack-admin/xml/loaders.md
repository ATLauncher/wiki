# Loaders

This section contains the elements related to installing mod loaders within your pack.

## History of loaders in ATLauncher

Before June 2019, if you wanted to install Forge loader into your pack, you had to use a special tool on the ATLauncher
admin panel. This also meant that when Forge updated, you had to also re run and do the work to get it working with your
pack.

Forge for 1.13 changed the way they install and no longer was it just a bunch of static jar files that had to be loaded
in order to get Forge to work, you now had to run an installer, which would then run some programs in order to generate
jar files for mappings. Since this could no longer be done on the server side without hosting the output jars ourselves,
we moved towards adding loader support within the ATLauncher client itself.

This means easier configuration of loaders for you, and easier for us to maintain and update as needed, as well as more
support for loaders as new ones come out.

This was initially done for Forge 1.6.1 and newer, but now all Minecraft and Forge versions are supported.

## How to add loaders

Now into how to actually add loaders to your pack.

It's simple really, simply define a new loader definition for the mod loader you want, directly under the `</pack>`
section of your xml.

### Forge

You can add a Forge loader to your pack for any Minecraft version that supports forge.

Now once you know which version of Forge you want to use
([https://files.minecraftforge.net](https://files.minecraftforge.net)) simply define a loader like below:

```xml
<loader type="forge" version="26.0.5"/>
```

If, while in development for a new version or pack, you want to constantly use the latest (or recommended) version of
Forge, you can do so like below:

```xml
<loader type="forge" latest="true"/>
```

```xml
<loader type="forge" recommended="true"/>
```

You can also allow the user to select the version of Forge that they want to use. To do this, simply specify the
**choose** argument like:

```xml
<loader type="forge" choose="true"/>
```

Note that while this is fine for development, you probably will want to make sure you use a fixed version before
publishing. But hey, that's completely up to you and the type of pack you're running.

### Fabric

You can add a Fabric loader to your pack for any Minecraft version 1.14 and above.

Now once you know which version of Fabric you want to use ([https://fabricmc.net/use/](https://fabricmc.net/use/))
simply grab the loader version (the yarn/mappings/intermediary version doesn't matter), then define a loader like below:

```xml
<loader type="fabric" loader="0.4.8+build.154" />
```

Much like with Forge, if you want to constantly use the latest version (there is no recommended version for Fabric), you
can do so like below:

```xml
<loader type="fabric" latest="true" />
```

Just like with Forge, you can also allow the user to select the loader version themselves:

```xml
<loader type="fabric" choose="true"/>
```

Again this is fine for development, but you may wish to use a fixed version for release.

## Full example

```xml
<version>
    <pack>
        <version>1.0.0</version>
        <minecraft>1.14</minecraft>
    </pack>
    <loader type="fabric" loader="0.4.8+build.154" />
</version>
```

### Quilt

You can add a Quilt loader to your pack for any Minecraft version 1.14 and above.

Now once you know which version of Quilt you want to use ([https://quiltmc.org/install/](https://quiltmc.org/install/))
simply grab the loader version (the yarn/mappings/intermediary version doesn't matter), then define a loader like below:

```xml
<loader type="quilt" loader="0.4.8+build.154" />
```

Much like with Forge, if you want to constantly use the latest version (there is no recommended version for Fabric), you
can do so like below:

```xml
<loader type="quilt" latest="true" />
```

Just like with Forge, you can also allow the user to select the loader version themselves:

```xml
<loader type="quilt" choose="true"/>
```

Again this is fine for development, but you may wish to use a fixed version for release.

## Full example

```xml
<version>
    <pack>
        <version>1.0.0</version>
        <minecraft>1.14</minecraft>
    </pack>
    <loader type="quilt" loader="0.4.8+build.154" />
</version>
```
