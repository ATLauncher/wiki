---
title: <pack>
---

This section contains the root elements of your pack's version. For information on the different sections, see below or use the table of contents to the right to navigate to the section you're looking for.

## `<version>`

Optional: No

This is the version of your pack that this XML is for. This can be in any format you like, but must only contain contain letters, numbers, dashes, underscores and periods and cannot start with the word dev.

### Examples

**Valid**

```xml
<version>1.2.3.4</version>
<version>test</version>
<version>1.0-dev</version>
```

**Invalid**

```xml
<version>dev2.4</version>
<version>version22!</version>
<version>1.2.3(dev)</version>
```

## `<minecraft>`

Optional: No

This is the version of Minecraft that this version uses. This must be a valid version of Minecraft, if you attempt to save your XML with an invalid version of Minecraft, then it won't allow you to save it. Please note that there may be a delay inbetween Mojang releasing a new version and the version being available.

### Examples

**Valid**

```xml
<minecraft>1.2.5</minecraft>
<minecraft>1.7.4</minecraft>
<minecraft>1.6.2</minecraft>
```

**Invalid**

```xml
<minecraft>0.0.1</minecraft>
<minecraft>1</minecraft>
<minecraft>174</minecraft>
```

## `<memory>`

Optional: Yes\\
Default: None

This is the minimum amount of memory/ram (in MB) this version should use when launching Minecraft. This should be a number bigger than 0, although non valid numbers will parse and save on the admin panel. When this value is set, if the user has less memory than this allocated in the launchers settings it will use this value if it's less than half of the users total ram. For instance if the user has 4GB of ram and you have set a 3GB minimum, this would be ignored as it's more than half of the users total ram. Please note that half a GB is 512MB, 1GB is 1024MB, 2GB is 2048MB and so on an so forth, but make sure to leave out the MB portion of it.

### Examples

**Valid**

```xml
<memory>2048</memory>
<memory>1024</memory>
<memory>4096</memory>
```

**Invalid**

```xml
<memory>1024MB</memory>
<memory>4G</memory>
<memory>1 gigabyte</memory>
```

## `<permgen>`

Optional: Yes\\
Default: None

This is the minimum amount of permgen/metaspace (in MB) this version should use when launching Minecraft. This should be a number bigger than 0, although non valid numbers will parse and save on the admin panel. When this value is set, if the user has less permgen than this allocated in the launchers settings it will use this value if it's less than an eighth of the users total ram. For instance if the user has 4GB of ram and you have set a 1GB minimum, this would be ignored as it's more than an eighth of the users total ram. Please note that half a GB is 512MB, 1GB is 1024MB, 2GB is 2048MB and so on an so forth, but make sure to leave out the MB portion of it. As a general rule of thumb, values more than 256 are highly unnecessary and can cause issues.

### Examples

**Valid**

```xml
<permgen>64</permgen>
<permgen>256</permgen>
<permgen>512</permgen>
```

**Invalid**

```xml
<permgen>125MB</permgen>
<permgen>0.5G</permgen>
<permgen>1 quarter of a gigbyte</permgen>
```

## `<noconfigs>`

Optional: Yes\\
Default: false

This determines if this version doesn't have configs. If this is set to true then this version doesn't have configs and won't attempt to download them when installing. This must be a boolean string value of either true or false.

### Examples

**Valid**

```xml
<noconfigs>true</noconfigs>
<noconfigs>false</noconfigs>
```

**Invalid**

```xml
<noconfigs>1</noconfigs>
<noconfigs>yes</noconfigs>
<noconfigs>no thanks</noconfigs>
```

## `<caseallfiles>`

Optional: Yes\\
Default: None

This setting determines if all mod files installed by the pack will be cased. This has 2 valid values, "upper" and "lower". If "upper" is used, all mod files are saved in uppercase, so "CodeChickenCore 1.7.2-rc1.jar" becomes "CODECHICKENCORE 1.7.2-RC1.jar" and vice versa for "lower" which turns the file into all lowercase.

### Examples

**Valid**

```xml
<caseallfiles>upper</caseallfiles>
<caseallfiles>lower</caseallfiles>
```

**Invalid**

```xml
<caseallfiles>none</caseallfiles>
<caseallfiles>lowercase</caseallfiles>
<caseallfiles>uppercase</caseallfiles>
```

## `<mainclass>`

Optional: Yes\\
Default: Set by Mojang

This is used to tell the launcher what the mainclass is to pass to the Java runtime. This value is retrieved using the Forge Libraries tool in the Admin Panel. While this is optional, if you are running Forge (most likely you are) then this needs to be set, otherwise only Vanilla Minecraft will load.

This element has 2 optional attributes which are shown below.

### depends=""

Optional: Yes\\
Default: None

This will allow you to restrict the mainclass from being used if the value specified here isn't selected/installed. The value put here should be the exact same name as the mod's name attrubute.

### dependsgroup=""

Optional: Yes\\
Default: None

This will allow you to restrict the mainclass from being used if the value specified here isn't selected/installed from a mod's group. The value put here should be the exact same name as the mod's group value. If there are several mods with the same group then only one needs to be selected for this mainclass to actually be used.

### Examples

**Valid**

```xml
<mainclass>net.minecraft.launchwrapper.Launch</mainclass>
<mainclass depends="Minecraft Forge">net.minecraft.launchwrapper.Launch</mainclass>
<mainclass dependsgroup="Forge">net.minecraft.launchwrapper.Launch</mainclass>
```

**Invalid**

```xml
<mainclass></mainclass>
<mainclass depends="">net.minecraft.launchwrapper.Launch</mainclass>
<mainclass dependsgroup="">net.minecraft.launchwrapper.Launch</mainclass>
```

## `<extraarguments>`

Optional: Yes\\
Default: None

This is used to give the launcher extra arguments when launching Minecraft. This can include Java related arguments or in most instances this is used to load Forge/LiteLoader by using –tweakClass= provided by the Forge Libraries tool in the Admin Panel.

Please be careful when adding custom Java arguments as this may have unintended side effects on some users.

This element has 2 optional attributes which are shown below.

### depends=""

Optional: Yes\\
Default: None

This will allow you to restrict the extra arguments from being used if the value specified here isn't selected/installed. The value put here should be the exact same name as the mod's name value.

### dependsgroup=""

Optional: Yes\\
Default: None

This will allow you to restrict the extra arguments from being used if the value specified here isn't selected/installed from a mod's group. The value put here should be the exact same name as the mod's group value. If there are several mods with the same group then only one needs to be selected for this extra arguments to actually be used.

### Examples

**Valid**

```xml
<extraarguments>--tweakClass=cpw.mods.fml.common.launcher.FMLTweaker</extraarguments>
<extraarguments depends="Minecraft Forge">--tweakClass=cpw.mods.fml.common.launcher.FMLTweaker</extraarguments>
<extraarguments dependsgroup="Forge">--tweakClass=cpw.mods.fml.common.launcher.FMLTweaker</extraarguments>
```

**Invalid**

```xml
<extraarguments>--tweakClass=cpw.mods.fml.common.launcher.FMLTweaker</extraarguments>
<extraarguments depends="">--tweakClass=cpw.mods.fml.common.launcher.FMLTweaker</extraarguments>
<extraarguments dependsgroup="">--tweakClass=cpw.mods.fml.common.launcher.FMLTweaker</extraarguments>
```

## `<serverarguments>`

Optional: Yes\\
Default: None

This is used to add arguments to the startup script for servers.

Please be careful when adding server arguments as this may have unintended side effects on some users and you should take care to test across multiple operating systems and Java versions to make sure there is no effects.

### Examples

```xml
 <serverarguments>-Duser.country=US -Duser.language=en</serverarguments>
```

## `<java>`

Optional: Yes\\
Default: None

This determines which versions of Java can be used to play the pack. You can set a minimum and/or a maximum version. If the user attempts to play the pack with a non matching Java version, they will be unable to do so, and a message will show to the user telling them to get an appropriate version of Java.

This element has 2 optional attributes which are shown below.

### min=""

Optional: Yes\\
Default: None

The major Java version that is needed at minimum in order to play the pack. This should be a value like 8, rather than 1.8 or 1.8.101.

### max=""

Optional: Yes\\
Default: None

The major Java version that is needed at maximum in order to play the pack. This should be a value like 8, rather than 1.8 or 1.8.101.

### Examples

```xml
  <java min="7" max="8" />
  <java min="7" />
  <java max="8" />
```

## `<mods>`

Optional: Yes

This allows you to control how mods in the pack are allowed to be modified. It allows turning on users to add mods directly from Curse from within ATLauncher. It also allows you to restrict users from using the Edit Mods button on the instance to add/remove mods easily.

This element has 2 optional attributes which are shown below.

### edit=""

Optional: Yes\\
Default: true

If users should be allowed to use the Edit Mods button on instances of this pack. By setting this to **false**, you can remove that button from instances, so that users cannot modify mods within ATLauncher. Users can still add and remove mods in the folder structure of the launcher, but for most cases this will deter changing of packs.

### curse=""

Optional: Yes\\
Default: false

This allows you to enable the addition of mods directly from Curse from within ATLauncher. When set to **true**, users will get the option to browse mods within ATLauncher and quickly add them to your pack.

### Examples

```xml
  <mods curse="true" edit="false" />
  <mods curse="true" />
  <mods edit="false" />
```
