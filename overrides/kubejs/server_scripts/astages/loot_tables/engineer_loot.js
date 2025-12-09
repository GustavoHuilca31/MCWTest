// ==========================================
// AStages - Engineer Stage Loot Tables  
// ==========================================
// Loot restrictions for Engineer stage - unlocks bronze materials and GTCEU basics

console.log('Loading Engineer stage loot restrictions...');

// ============ LOOTJS INTEGRATION ============
// Use LootJS to add custom wa: loot tables for Engineer stage

LootJS.modifiers((event) => { 

        /* event.addLootTableModifier(/dungeoncrawl:chests\/stage_[1-5]/)
        .hasAnyStage(STAGES.ENGINEER)
        .apply((context) => {
            context.server.lootData
            .getLootTable(/dungeoncrawl:chests\/stage_[1-5]/)
            .getRandomItems(context.vanillaContext, (item) => {
                context.loot.add(item);
            });
        }); */ 
        // Replaced with helper function
        // Food improvements for Engineer
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/food', 'wa:dungeon_crawl_food_engineer', STAGES.ENGINEER);
        // Dungeon Crawl stage chests for Engineer
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_1', 'wa:dungeon_crawl_stage_1_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_2', 'wa:dungeon_crawl_stage_2_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_3', 'wa:dungeon_crawl_stage_3_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_4', 'wa:dungeon_crawl_stage_4_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_5', 'wa:dungeon_crawl_stage_5_engineer', STAGES.ENGINEER);
    
        event.addLootTableModifier('dungeoncrawl:chests/special_pattern_room')
        .hasAnyStage(STAGES.ENGINEER)
        .addLoot('kubejs:lv_special_pattern');

        // Dungeon Crawl Forge chests for Engineer
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/forge', 'wa:dungeon_crawl_forge_engineer', STAGES.ENGINEER);
        // Engineer materials to structure chests
        let structureChests = [
            'ati_structures:chests/resources',
            'ati_structures:chests/crafting',
            'ati_structures:chests/armory',
            'ati_structures:chests/aqua',
            'ati_structures:chests/archer_chest2',
            'minecraft:chests/stronghold/corridor',
            'minecraft:chests/abandoned_mineshaft',
            'minecraft:chests/desert_pyramid',
            'minecraft:chests/woodland_mansion',
            'minecraft:chests/jungle_temple',
            'minecraft:chests/igloo_chest'
        ];
        addStagedCustomLootTableModifier(event, structureChests, 'wa:engineer_materials_chest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, structureChests, 'wa:engineer_armory_chest', STAGES.ENGINEER);
        // Vanilla village chests with bronze materials
        //let villageChests = getChestLootTablesFromMod('minecraft:chests').filter(table => table.includes('village'));
        //Replace with regex
        let villageChests = /minecraft:chests\/.*/;
        addStagedCustomLootTableModifier(event, villageChests, 'wa:engineer_material_chest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'minecraft:chests/stronghold_library', 'wa:engineer_material_chest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'minecraft:chests/stronghold_library', 'wa:engineer_stronghold_library', STAGES.ENGINEER);

        // Apotheosis Tome Tower 
        addStagedCustomLootTableModifier(event, 'apotheosis:chests/tome_tower', 'wa:tome_tower_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'apotheosis:chests/chest_valuable', 'wa:tome_tower_engineer', STAGES.ENGINEER);
        // Better Fortresses treasure for Engineer
        addStagedCustomLootTableModifier(event, /betterfortresses:chests\/.*/, 'wa:betterfortresses_treasure', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, /betterfortresses:chests\/.*/, 'wa:engineer_valuable_chest', STAGES.ENGINEER); 
        // Apotheosis spawner chests for Engineer
        let apotheosisSpawners = [
            'apotheosis:chests/spawner_brutal',
            'apotheosis:chests/spawner_brutal_rotate',
            'apotheosis:chests/spawner_swarm'
        ];
        addStagedCustomLootTableModifier(event, apotheosisSpawners, 'wa:engineer_valuable_chest', STAGES.ENGINEER);

        //Infinite Caves chests for Engineer
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/dinosaur', 'wa:engineer_dinosaur', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/dinosaur', 'wa:dungeon_crawl_stage_4_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/amethyst_geode', 'wa:engineer_amethyst_geode', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/amethyst_geode', 'wa:dungeon_crawl_food_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/deep_dark_temple', 'wa:engineer_deep_dark_temple', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/deep_dark_temple', 'wa:engineer_valuable_chest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/frozen_robot', 'wa:engineer_frozen_robot', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/frozen_robot', 'wa:dungeon_crawl_stage_2_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/knuckle_trap', 'wa:engineer_knuckle_trap', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/knuckle_trap', 'wa:dungeon_crawl_stage_3_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/limestone_houses', 'wa:engineer_limestone_houses', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/limestone_houses', 'wa:dungeon_crawl_food_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/sulfide_huts', 'wa:dungeon_crawl_stage_5_engineer', STAGES.ENGINEER);
        
        //Simple vanilla dungeons for Engineer
        addStagedCustomLootTableModifier(event, 'minecraft:chests/simple_dungeon', 'wa:dungeon_crawl_stage_4_engineer', STAGES.ENGINEER);
        
        //Ice And Fire structures for Engineer
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/fire_dragon_male_cave', 'wa:engineer_dragon_male_nest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/fire_dragon_female_cave', 'wa:engineer_dragon_male_nest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/ice_dragon_male_cave', 'wa:engineer_dragon_male_nest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/ice_dragon_female_cave', 'wa:engineer_dragon_male_nest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/lightning_dragon_male_cave', 'wa:engineer_dragon_male_nest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/lightning_dragon_female_cave', 'wa:engineer_dragon_male_nest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/fire_dragon_roost', 'wa:engineer_dragon_roost', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/ice_dragon_roost', 'wa:engineer_dragon_roost', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/lightning_dragon_roost', 'wa:engineer_dragon_roost', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/mausoleum_chest', 'wa:engineer_mausoleum_chest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/myrmex_loot_chest', 'wa:engineer_myrmex_loot_chest', STAGES.ENGINEER);
        //Overhauled Structures chests for Engineer
        //Overhauled Spider Dungeon
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovds_loot_tables\/.*/, 'wa:engineer_ovds_loot_tables', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovds_loot_tables\/.*/, 'wa:dungeon_crawl_stage_3_engineer', STAGES.ENGINEER);
        //Overhauled Basic Dungeon
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovbd_loot_tables\/.*/, 'wa:engineer_ovbd_loot_tables', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovbd_loot_tables\/.*/, 'wa:dungeon_crawl_stage_2_engineer', STAGES.ENGINEER);
        //Overhauled Dungeon Prison
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovdp_loot_tables\/.*/, 'wa:engineer_ovdp_loot_tables', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovdp_loot_tables\/.*/, 'wa:dungeon_crawl_stage_3_engineer', STAGES.ENGINEER);
        //SGJourney Chests
        addStagedCustomLootTableModifier(event, /sgjourney:chests\/.*/, 'wa:dungeon_crawl_stage_3_engineer', STAGES.ENGINEER);
        //Dungeons Arise chests for Engineer
        addStagedCustomLootTableModifier(event,/dungeons_arise:chests\/.*/, 'wa:engineer_dungeons_arise', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event,/dungeons_arise:chests\/.*/, 'wa:engineer_valuable_chest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event,/dungeons_arise:chests\/.*/, 'wa:dungeon_crawl_food_engineer', STAGES.ENGINEER);
        //Dungeons Arise Seven Seas Treasure
        addStagedCustomLootTableModifier(event,/dungeons_arise:chests\/.*/, 'wa:engineer_valuable_chest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event,/dungeons_arise:chests\/.*/, 'wa:dungeon_crawl_food_engineer', STAGES.ENGINEER);
        //Bosses of Mass Destruction chests for Engineer
        const bossStructureChests = /bosses_of_mass_destruction:chests\/.*/;
        addStagedCustomLootTableModifier(event, bossStructureChests, 'wa:dungeon_crawl_stage_3_engineer', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, bossStructureChests, 'wa:engineer_valuable_chest', STAGES.ENGINEER);
        //Nova Structures chests for Engineer
        addStagedCustomLootTableModifier(event, /nova_structures:chests\/.*/, 'wa:engineer_material_chest', STAGES.ENGINEER);
        addStagedCustomLootTableModifier(event, /nova_structures:chests\/.*/, 'wa:dungeon_crawl_stage_2_engineer', STAGES.ENGINEER);
});

console.log('Engineer stage loot restrictions loaded successfully!');