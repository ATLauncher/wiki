---
title: <warnings>
---

Warnings allow you to include a warning popup message to the user when a mod is selected. This can be used to warn users
of a mod's instable nature or maybe warn users of an unintended side effect when installing the mod. Multiple mods can
use the same warning.

## XML Syntax

```xml
<warnings>
    <warning name="warning"><![CDATA[Your Warning Message Here]]></warning>
</warnings>

<mods>
    <mod name="Test Mod 1" warning="warning" .../>
</mods>
```

## How To Use

The warning message in the `<warning name="blah"></warning>` XML will show up to the user ONLY when they select that mod
specifically. When they are unselecting it or if they use the Select All/Recommended button, it won't show up.

Your warning messages should be put into CDATA tags and you can input HTML tags into them and it will display in HTML.
Make sure to test it out before publishing your pack's to make sure it displays as you want.

The `<warnings></warnings>` syntax should go between your `</pack>` and `<libraries>` tags after `<messages></messages>`
section if it's there.

## IMPORTANT INFO

Please note that when this warning message is shown to the user, they will be presented with a Yes and No option. Your
warning message should simply be just that, a warning message. The launcher will output text of it's own saying 'Are you
sure you want to enable this mod?' so you don't include that in your warning message.

## Example

```xml
<warnings>
    <warning name="warning1"><![CDATA[Your Message Here]]></warning>
    <warning name="warning2"><![CDATA[Your Message Here]]></warning>
</warnings>

<mods>
    <mod name="Test Mod 1" warning="warning1" .../>
    <mod name="Test Mod 2" warning="warning1" .../>
    <mod name="Test Mod 3" warning="warning2" .../>
</mods>
```
