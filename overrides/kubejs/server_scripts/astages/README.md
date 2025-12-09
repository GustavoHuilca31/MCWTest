# AStages Migration Documentation
## WaneCraft Modpack - CraftTweaker to KubeJS Migration

### Migration Complete!
This migration moves from CraftTweaker GameStages + LootStages to KubeJS AStages for better performance and maintainability.

### File Structure
```
kubejs/server_scripts/astages/
├── main.js              # Main integration and migration utilities
├── stages.js            # Stage definitions and unlock conditions  
├── loot_tables.js       # Loot table replacements per stage
├── item_restrictions.js # Item/mod restrictions per stage
├── recipes.js           # Recipe modifications and staging
└── README.md           # This documentation file
```

### Stage Progression
1. **Primitive** - Starting stage (granted on join)
   - Basic survival, no advanced tools/armor
   - Vanilla equipment replaced with TC equivalents

2. **Tinkerer** - Craft Tinker Station
   - Unlocks Tinker's Construct crafting
   - Basic TC tools and weapons
   - Iron-tier materials

3. **Engineer** - Complete smeltery advancement  
   - Unlocks smeltery and bronze materials
   - Advanced TC components
   - Basic GTCEU materials

4. **Alchemist** - Craft MV Machine Hull
   - Unlocks GTCEU technology
   - Advanced alloys and machinery
   - Chemical processing

5. **Necromancer** - Kill Wither
   - Unlocks nether star content
   - Dark magic themed items
   - End-tier materials

6. **Master** - Kill Ender Dragon
   - Unlocks End dimension access
   - Dragon-related items
   - Ultimate tier progression

7. **Champion** - Obtain Bedrock
   - Creative-tier access
   - Ultimate endgame content
   - No restrictions

### Key Features

#### Loot Table Management
- Stage-exclusive chest pools prevent inheritance conflicts
- Each stage has unique loot tables with appropriate tier items
- Comprehensive coverage: Villages, Dungeons, Structures, Modded chests

#### Item Restrictions  
- Progressive unlock system
- Vanilla equipment completely replaced with Tinker's Construct
- Mod-wide restrictions (GTCEU until Alchemist, etc.)
- JEI/REI integration - items hidden until unlocked

#### Performance Optimizations
- Cached stage checks (5 second cache)
- Efficient event handling  
- Minimal tick operations
- Proper cleanup and memory management

#### Compatibility
- Jade integration for stage-based information
- JEI/REI automatic item hiding
- Fast Workbench stage checks
- Dimension access control

### Migration Benefits

#### From CraftTweaker GameStages:
- ✅ Better performance (no ZenScript overhead)
- ✅ Real-time reloading with `/reload`
- ✅ Better debugging and logging
- ✅ More flexible event system
- ✅ Modern codebase

#### From LootStages:
- ✅ No inheritance conflicts
- ✅ Stage-exclusive loot pools
- ✅ Better loot table management
- ✅ Comprehensive chest coverage
- ✅ Tinker's Construct equipment focus

### Commands
```
/astages info [player]           # View stages for player
/astages add <player> <stage>    # Grant stage to player
/astages remove <player> <stage> # Remove stage from player
/astages remove_all <player>     # Remove all stages

# Debug commands (OP only)
/debug stages                    # Show current stages
/debug grant all                 # Grant all stages (testing)
```

### Configuration Files
- `config/astages-common.toml` - Main AStages configuration
- Stage titles, colors, and timings can be customized
- All migration settings included

### Troubleshooting

#### Common Issues:
1. **Loot tables not working**: Ensure all `wa:` namespace tables exist
2. **Items not restricted**: Check if AStages is properly loaded  
3. **Stage not granting**: Verify trigger conditions in stages.js
4. **Performance issues**: Check server logs for errors

#### Migration Verification:
1. Start server - should load without errors
2. Join game - should receive Primitive stage
3. Craft Tinker Station - should unlock Tinkerer stage  
4. Check JEI - advanced items should be hidden
5. Open chests - should contain appropriate stage loot

### Backup Information
Original CraftTweaker scripts backed up in:
- `scripts/` folder (preserved)
- Can be removed after successful migration verification

### Support
- Check server logs for AStages events
- Use debug commands for testing
- Migration status logged on player login
- All events logged to console

### Next Steps
1. Test progression in-game
2. Verify all loot tables are working
3. Check item restrictions function correctly
4. Remove old CraftTweaker scripts once verified
5. Optionally customize stage titles/colors in config

---
**Migration completed on:** November 24, 2025  
**Migrated from:** CraftTweaker GameStages + LootStages  
**Migrated to:** KubeJS AStages  
**Status:** ✅ Complete and ready for testing