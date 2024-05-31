---
title: /v1/packs
---

This path in the API provides a basic listing of the packs on the Launcher.

## GET /packs/simple

This call lists information about the amount and type of packs in the ATLauncher that have, at minimum, 1 published
version. It returns an array with [Simple Pack Object](/api-docs/v1/objects/simple-pack) elements.

## GET /packs/full/all

This call lists all the packs in the Launcher that have, at minimum, 1 published version. It returns an array of
[Pack Object](/api-docs/v1/objects/pack) type.

## GET /packs/full/public

This call lists all the packs in the Launcher that have, at minimum, 1 published version and are listed as Public. It
returns an array of [Pack Object](/api-docs/v1/objects/pack) type.

## GET /packs/full/semipublic

This call lists all the packs in the Launcher that have, at minimum, 1 published version and are listed as Semi Public.
It returns an array of [Pack Object](/api-docs/v1/objects/pack) type.

## GET /packs/full/private

This call lists all the packs in the Launcher that have, at minimum, 1 published version and are listed as Private. It
returns an array of [Pack Object](/api-docs/v1/objects/pack) type.
