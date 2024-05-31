---
title: Troubleshooting
---

Here's some common issues and how to fix them.

## Can't find pack in launcher

If you cannot see your pack in the launcher, make sure your account has been added as a tester on the settings page. If
you don't do this, you will not be able to see your pack before it's published.

## Lag Spikes

ATLauncher now uses half of your system's memory by default up to a maximum of 4GB, but if you are using a lot of mods
it may not be enough. Double check your settings to make sure enough memory is being set. Most packs require at least
2GB to run and thus will require a [64 bit OS with 64 bit Java](https://atlauncher.com/help/32bit).

## Mod ID Conflict

If you're getting a mod conflict then this is a problem that should be reported to the relevant mod authors. However you
can often solve these yourself by working out which mods are conflicting and changing their IDs from the config files.
The error log will often let you know of a conflict, but you can also add and remove mods slowly until you find the
problematic mod. For instance if the game starts crashing when you add Mystcraft, remove all mods but Mystcraft and see
if it works on its own. If so, you likely have a conflict. Add your other mods slowly until you find which one is
causing the crash. When you have the two mods figured out look for any conflicting IDs.

## XML Syntax error

The online editor will try to let you know of any errors in your syntax but it isn't perfect. You can try using an XML
validator ([https://www.w3schools.com/xml/xml_validator.asp](https://www.w3schools.com/xml/xml_validator.asp)) or
posting your XML on the **#pack-developers** channel in our [Discord](https://atl.pw/discord) to get some help. One
useful way to find problems is to remove all mods and seeing if the XML is accepted online, and if so add back mods
until you find the problematic one. Common problems are not escaping ampersands using & and not closing a tag with />.
