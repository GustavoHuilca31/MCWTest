Structures Tweaker Configuration Guide
=====================================

This folder contains configuration files for the Structures Tweaker mod.

GLOBAL CONFIGURATION
-------------------
The 'global.json' file sets default behavior for ALL structures.
Configure your server-wide settings here first.

INDIVIDUAL STRUCTURE CONFIGS
---------------------------
Each structure can have its own config file in subfolders by mod:
  - minecraft/village_plains.json
  - dungeons_arise/shiraz_palace.json
  - etc.

These individual files only need to contain settings that differ from
the global defaults. For example:

global.json (server defaults):
{
  "config": {
    "canBreakBlocks": false,
    "allowElytraFlight": false
  }
}

minecraft/creative_plot.json (creative area exception):
{
  "individualOverrides": {
    "canBreakBlocks": true
  }
}

In this setup, the creative plot allows breaking blocks while inheriting
the elytra restriction from global settings.

HOW PRIORITY WORKS
-----------------
Settings are applied in this order:
1. Individual structure config (highest priority)
2. Global config
3. Mod defaults (if nothing else is set)

AVAILABLE SETTINGS
-----------------
- canInteract         : Allow interacting with blocks in structure (default: true)
- onlyProtectOriginalBlocks: Only protect blocks that were part of the original structure (default: false)
- allowExplosions     : Allow explosions in structure (default: true)
- preventPassiveSpawns: Prevent passive mob spawning in structure (default: false)
- allowItemPickup     : Allow item pickup in structure (default: true)
- preventHostileSpawns: Prevent hostile mob spawning in structure (default: false)
- allowFireSpread     : Allow fire to spread in structure (default: true)
- interactionBlacklist: Blocks that can never be interacted with (e.g., minecraft:repeater, minecraft:comparator) (default: [])
- canBreakBlocks      : Allow breaking blocks in structure (default: true)
- itemUseWhitelist    : Items that can always be used in the structure, overrides blacklist (default: [])
- allowPlayerPVP      : Allow player vs player combat in structure (default: true)
- itemUseBlacklist    : Items that cannot be used in the structure (e.g., minecraft:boat, minecraft:water_bucket) (default: [])
- canPlaceBlocks      : Allow placing blocks in structure (default: true)
- allowRiptide        : Allow riptide trident usage in structure (default: true)
- interactionWhitelist: Blocks that can always be interacted with (e.g., minecraft:lever, minecraft:button) (default: [])
- allowElytraFlight   : Allow elytra flight in structure (default: true)
- allowEnderTeleportation: Allow all ender-based teleportation (pearls, chorus fruit) in structure (default: true)
- allowCreatureSpawning: Allow mob spawning in structure (default: true)
- allowEnderPearls    : Allow ender pearl usage in structure (default: true)
- allowCreativeFlight : Allow creative flight in structure (default: true)

TIPS
----
- Start by configuring global.json with your server's base rules
- Only create individual configs for structures that need exceptions
- Delete individual config files to make structures use global defaults
- The mod automatically cleans up old/invalid settings from files
- Changes take effect after server restart or /reload command
- See availableconfigs.txt for a complete list of all config options
