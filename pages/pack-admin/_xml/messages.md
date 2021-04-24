# Messages

Messages allows you to include messages to your pack's users when they update/install/reinstall your pack. They are
version independent and you can specify messages for each version of your pack.

## XML Syntax

```xml
<messages>
    <install><![CDATA[Your Message Here]]></install>
    <update><![CDATA[Your Message Here]]></update>
</messages>
```

## How To Use

The message in the `<install></install>` XML will show up to the user ONLY when they are installing the pack from the
Packs tab.

The message in the `<update></update>` XML will show up to the user when they update or reinstall the pack from the
Instances tab.

Your messages should be put into CDATA tags and you can input HTML tags into them and it will display in HTML. Make sure
to test it out before publishing your pack's update to make sure it displays as you want.

The `<messages></messages>` syntax should go between your `</pack>` and `<libraries>` tags.

## Example

```xml
<messages>
    <install><![CDATA[<center>Enjoy</center>]]></install>
    <update><![CDATA[<b>Be Careful</b>]]></update>
</messages>
```
