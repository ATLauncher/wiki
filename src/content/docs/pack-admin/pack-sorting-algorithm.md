---
title: ATLauncher Pack Sorting Algorithm (ATLPSA)
---

The ATLauncher Pack Sorting Algorithm, or ATLPSA for short, is the algorithm used to sort the packs in the Launcher.
It's a complicated set of calculations based on 5 distinct sections which are each explained below. In order to
understand the below points, you must first understand the overall system and how it works.

## Overview

The system ranks packs on a score between 0 and infinite. Using the 5 key points below, a score is calculated and the
packs are ranked from 1 all the way down to the number of packs there are in the Launcher.

There are 3 main statistics which are calculated from the system (Points 1 to 3 below) and each have their own weight.
The value a pack can receive during this first stage is a number from 0 up to 100. Each weighting indicates the number
of points which the top pack in that category receives. For instance if the weighting if 45%, the maximum number of
points a pack can get for that category is 45.

The first place pack in that category gets the whole 45 points and the second place gets 45 points minus the individual
weighting. For instance if there are 50 packs in the launcher then the individual weighting is 2%, meaning that second
place pack for that category gets 100%-2% of the points. In this case it would be a 98% weighting meaning 44.1 points.
Third place would get a 96% weighting meaning 43.2 points. And the process goes on and on until all packs are counted
and the last place pack gets 2% individual weighting meaning they would receive 0.9 points.

After the 3 categories have been calculated the pack will have a score between 0 and 100. Then 2 different multipliers
are added to the packs base score as described in points 4 and 5 below.

## 1. Unique Players

This is the number of unique players the pack has had in the last 7 days. In this instance a unique player is a user who
has played the pack (leaderboards on or off, it doesn't matter) and is calculated by a users IP address. Please note a
users metric will not be counted if they have disabled logging in the Launcher.

This category has a weighting of 55%

## 2. Installs

This is the number of total installs a pack has had in the last 7 days. This counts all installs, re installs and
updates, but only counts them if they were complete and did not error out. Please note a users metric will not be
counted if they have disabled logging in the Launcher.

This category has a weighting of 30%

## 3. Hours Played

This is the number of hours played of a pack on the leaderboards in the last 7 days. This counts all users regardless of
if they have leaderboards turned on or off. Please note a users metric will not be counted if they have disabled logging
in the Launcher.

This category has a weighting of 15%

## 4. ATLauncher Multiplier

This is set as a default to 1.0 and is not used currently and is in the system for possible future usage.

This will NEVER be used as a pay to advance system. We do not accept payments or donations for favoritism/advantages in
the rankings system.

## 5. Other Multipliers

This is a multiplier combining many positive and negative bonuses listed below. All the different bonuses are added or
subtracted from a base of 1.0 before being applied to the packs score from the first 4 categories.

Please note at this time there are no other multipliers.

## Final Calculation

Once all the 5 above statistics have been calculated, they are compiled and added in the following order:

The first 3 categories are added to give a base value between 0 and 100.

Example: `32 + 12 + 8 = 52`

Then the ATLauncher Multiplier is multiplied with the base score

Example: `52 * 1.0 = 52`

Then the Other Multiplier is multiplied by that new base score to give the final score

Example: `52 * 0.9 = 46.8`

Then the packs are all ranked from the highest score to the lowest score and given a position number ranging from 1 to
the number of packs, where 1 is the top ranked pack.

This is all calculated around 12:30am UTC every day.

## Why Are You Doing This?

We are doing this in order to more accurately reflect "popular" and "well made" packs and give those packs which are
more "popular" and "well made" the attention they deserve.

Please note that this system is currently being optimized and tweaked to get the best results. Please check back here
every now and then for updates on changes to the system.
