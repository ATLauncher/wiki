# /admin/pack/[pack name]/settings

This path in the APi deals with the settings for a pack. It allows you to modify and view the allowed players (if a
private pack) and the testers. Please note that the pack name provided in these calls must have all non alphanumeric
characters removed and case is sensitive.

## GET /admin/pack/[pack name]/settings/allowedplayers

This returns an array of usernames who are listed as testers for the pack.

## PUT /admin/pack/[pack name]/settings/allowedplayers

This replaces all the allowed players for the pack with the allowed players provided. Data provided must be an array of
users.

## POST /admin/pack/[pack name]/settings/allowedplayers

This adds 1 or more allowed players to the pack. Data provided must be an array of users to add.

## DELETE /admin/pack/[pack name]/settings/allowedplayers

This removes all allowed players from the pack if no input provided, otherwise is an array is provided it will remove
those user/s.

## GET /admin/pack/[pack name]/settings/testers

This returns an array of usernames who are listed as testers for the pack.

## PUT /admin/pack/[pack name]/settings/testers

This replaces all the testers for the pack with the testers provided. Data provided must be an array of users.

## POST /admin/pack/[pack name]/settings/testers

This adds 1 or more testers to the pack. Data provided must be an array of users to add.

## DELETE /admin/pack/[pack name]/settings/testers

This removes all testers from the pack if no input provided, otherwise is an array is provided it will remove those
user/s.
