# Pack Guidelines & Rules

When making and maintaining a pack on the ATLauncher, there are a number of guidelines and rules that must be followed in order to optimise your pack for both the end user and our service.

Below is a brief outline as to what the Guidelines and Rules are for the ATLauncher.

## The Guildelines & Rules

### All Donation Links, Website Links and Descriptions Must Be Filled In

ATLauncher uses a bunch of different methods to automatically determine the website and donation links, as well as the mods description, there are some cases where this can not be found automatically. In these cases you'll need to make sure you fill these in with their correct values.

If you find any mods that require this to be done manually, please let ATLauncher Staff know and they can look into fixing it going forward.

### No Short Links Are Allowed

When making your XML, no short links are allowed ANYWHERE in your XML. All donation links, websites and urls must match exactly what the mod author has given. Exceptions to this are of course adfly url's given only by the mod author and when the mod author only provides a short link and doesn't want it changed.

### All Externally Downloaded Mods Must Be Included As Mods

Any mods which download themselves after the pack is installed (such as CodeChickenLib, ForgeMultiPart and JDBC) must be included in your XML as mods.

These mods have their own type in Minecraft >=1.6. Simply specify them as type="dependency" if they belong in the mods/1.6.x/ folder (where x is the minecraft version). If they ge in the mods/denlib/ folder the type is type="denlib" and if they go in the mods/ic2lib/ folder the type is type="ic2lib". Make sure to use the jar files and not the zip files. If they go somewhere else then just replicate their folder structure and set them as a type="extract" and set the extractto="" to where the base of that folder structure was.

The only exception to this rule is copyrighted content that you do not have permission for such as PortalGunSounds.pak and GalacticCraft sounds.

You also shouldn't include the file 'CarpentersBlocksCachedResources.zip' as this is created at runtime by Carpenters Blocks.

### You Cannot Upload Mods You Have No Permission For

This one is a given, if you have no permission for a mod then you cannot upload it to the Files section and include it in your XML. You can upload it to the files section if you wish to make it easier to get the correct XML syntax, but it must be deleted from the Files section ASAP.

You may upload files you have no permissions for (barring Mojang property) for the purposes of testing only. These mods must be removed from the files section and the XML before it's published. Making sure it's been deleted from your files section is important so your not hit with automatic permission request notices.

### You Must Use Mod Authors Original Links

If a mod author doesn't allow distribution and you have to use the browser or direct download types, then you must use the primary link supplied by the mod author. For example if the mod author provides both an adfly link and a direct link, the primary link should be used. If the primary link is the adfly link, you then cannot use the direct link in order to bypass it.

### Never Upload Mojang Property

You must never upload anything owned by Mojang, this includes the Minecraft.jar or any of their assets.

### All Files Must Be Uploaded With Their Original Filename

Whenever uploading any mods which you have permissions to distribute, you must upload them from the original file downloaded from the mod authors page unless it's custom or been modified. For example for a mod downloaded as 'forge-1.6.4-9.11.1.953-universal.jar', you must upload it as that and not as something like 'forge.jar'

This is in order to maintain and save diskspace and bandwith on both our servers and on the end user so that they aren't downloading multiple files when they don't have to.

### Configs Must Be Uploaded As Configs And Not As A Mod

Your pack's configs must be uploaded using the Configs Upload feature above where you edit your XML/JSON and must not be added as a Mod. The exception to this is when offering multiple configs such as hard mode/easy mode configs.

### If You Don't Login To Your Account Or Make Any Changes To Your Pack For 6 Months You Risk Losing Access

If you haven't logged into the admin panel for 6 months or made any changes to your pack in 6 months, you risk losing your pack/s. We will send out emails before your pack and account is deleted which will have a 14 day waiting period of which if we hear nothing back from you, we will go ahead and remove your account and pack/s.

### New Packs Must Be Approved For Publishing Within A Month

If you are a new pack and you have yet to be approved for publishing, if you have had the pack for more than 1 month, or 30 days, then you risk losing your pack. We will send out emails before your pack and account is deleted which will have a 7 day waiting period of which if we hear nothing back from you, we will go ahead and remove your account and pack/s.

If you receive a total of 2 of these emails and choose to keep the pack both times, the third time your pack will be automatically deleted without warning to you. So make sure you get publishing approval within 3 months to avoid this.

### Rules About Distribution By Other Means

When your pack is approved and on the launcher there are some guidelines/rules in terms of if/how you can distribute the pack outside of ATLauncher. We have no want to make all packs on the launcher be ATLauncher only packs, that's just not fair and not right, but there are some limitations when it comes to distributing your pack outside of ATLauncher.

Firstly don't distribute it illegally, meaning don't provide a zip of mods for someone to use when you don't have permission to do so from ALL modders whose mods you use. Basically if your using a browser or direct download, you can't do this.

Secondly don't provide means to use your pack without a premium Minecraft account, including having links to cracked versions of ATLauncher/other launchers. Providing a zip of mods for those who want to use something like MultiMC is fine, just don't be providing means of getting a cracked launcher for the pack.

Other than those 2 rules, have at it. We have no reason to want to lock you into using just ATLauncher, it's not good for us and it's not good for you. The more the merrier.

Please keep in mind that breaking either of those 2 rules will result in your pack being removed for soliciting pirated software/breaking licenses. We hope it won't come to this, but it's best to have these rules laid out so you know what's what.

### If In Doubt, Ask

If you are ever in doubt of any of our Guidelines & Rules or think something may be an issue, then ask us before doing anything just to make sure that it's okay to do

## Guideline/Rule Breaches

If these Guidelines & Rules are breaches, a email notice will be sent with a time to fix it. For minor issues the time is generally 96 hours (4 days), but once the notice has been sent the time will start regardless of if you have read it or not, so make sure your email is kept up to date in the Admin Panel.

Once the specified time is up, the affected pack will be disabled and no longer available in the Launcher and further contact sent.

If no contact is received within a week of your pack being disabled, then your pack will be removed from the Launcher and not added back in due to breaches of our Guidelines & Rules.

## Notification Of Updates To The Guidelines & Rules

You will receive an email with any updates to the Guidelines & Rules at least 96 hours (4 days) BEFORE they take effect so you can adjust accordingly.
