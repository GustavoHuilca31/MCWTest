// ==========================================
// AStages - Alchemist Stage Loot Tables
// ==========================================
// Loot restrictions for Alchemist stage - unlocks GTCEU technology

console.log('Loading Alchemist stage loot restrictions...');

// ============ LOOTJS INTEGRATION ============
// Use LootJS to add custom wa: loot tables for Alchemist stage

LootJS.modifiers((event) => {


        // GTCEU materials for Alchemist
        const atiChests = /ati_structures:chests\/.*/;
        const minecraftChests = /minecraft:chests\/.*/;
        addStagedCustomLootTableModifier(event, atiChests, 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, atiChests, 'wa:alchemist_armory_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, minecraftChests, 'wa:alchemist_armory_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, minecraftChests, 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        

        // Apotheosis chests
        const apotheosisChests = /apotheosis:chests\/.*/;
        addStagedCustomLootTableModifier(event, apotheosisChests, 'wa:apotheosis_alchemist_chest', STAGES.ALCHEMIST);


        // Dungeon Crawl stage chests for Alchemist
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_1', 'wa:dungeon_crawl_stage_1_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_2', 'wa:dungeon_crawl_stage_2_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_3', 'wa:dungeon_crawl_stage_3_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_4', 'wa:dungeon_crawl_stage_4_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_5', 'wa:dungeon_crawl_stage_5_alchemist', STAGES.ALCHEMIST);

        // Enhanced forge loot for Alchemist
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/forge', 'wa:dungeon_crawl_forge_alchemist', STAGES.ALCHEMIST);

        // Food improvements for Alchemist
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/food', 'wa:alchemist_food_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/food', 'wa:dungeon_crawl_food_alchemist', STAGES.ALCHEMIST);

        // Special pattern room for Alchemist (superior tier)
        event.addLootTableModifier('dungeoncrawl:chests/special_pattern_room')
        .hasAnyStage(STAGES.ALCHEMIST)
        .addLoot('kubejs:mv_special_pattern'); // Superior al LV de Engineer

// Structure chests for Alchemist
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
        addStagedCustomLootTableModifier(event, structureChests, 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, structureChests, 'wa:alchemist_armory_chest', STAGES.ALCHEMIST);

        // Village chests for Alchemist
        let villageChests = /minecraft:chests\/.*/;
        addStagedCustomLootTableModifier(event, villageChests, 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);

        // Stronghold library for Alchemist
        addStagedCustomLootTableModifier(event, 'minecraft:chests/stronghold_library', 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'minecraft:chests/stronghold_library', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);

        // Apotheosis Tome Tower for Alchemist
        addStagedCustomLootTableModifier(event, 'apotheosis:chests/tome_tower', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'apotheosis:chests/chest_valuable', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);

        // Better Fortresses treasure for Alchemist
        addStagedCustomLootTableModifier(event, /betterfortresses:chests\/.*/, 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);

        

        // Apotheosis spawner chests for Alchemist
        let apotheosisSpawners = [
            'apotheosis:chests/spawner_brutal',
            'apotheosis:chests/spawner_brutal_rotate',
            'apotheosis:chests/spawner_swarm'
        ];
        addStagedCustomLootTableModifier(event, apotheosisSpawners, 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);

        // Infinite Caves chests for Alchemist
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/dinosaur', 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/dinosaur', 'wa:dungeon_crawl_stage_4_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/amethyst_geode', 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/amethyst_geode', 'wa:dungeon_crawl_food_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/deep_dark_temple', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/frozen_robot', 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/frozen_robot', 'wa:dungeon_crawl_stage_2_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/knuckle_trap', 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/knuckle_trap', 'wa:dungeon_crawl_stage_3_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/limestone_houses', 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/limestone_houses', 'wa:dungeon_crawl_food_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/sulfide_huts', 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'infinity_cave:structures/sulfide_huts', 'wa:dungeon_crawl_stage_5_alchemist', STAGES.ALCHEMIST);

        // Simple vanilla dungeons for Alchemist
        addStagedCustomLootTableModifier(event, 'minecraft:chests/simple_dungeon', 'wa:dungeon_crawl_stage_4_alchemist', STAGES.ALCHEMIST);

        // Ice And Fire structures for Alchemist
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/fire_dragon_male_cave', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/fire_dragon_male_cave', 'wa:alchemist_dragon_cave_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/fire_dragon_female_cave', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/fire_dragon_female_cave', 'wa:alchemist_dragon_cave_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/ice_dragon_male_cave', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/ice_dragon_male_cave', 'wa:alchemist_dragon_cave_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/ice_dragon_female_cave', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/ice_dragon_female_cave', 'wa:alchemist_dragon_cave_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/lightning_dragon_male_cave', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/lightning_dragon_male_cave', 'wa:alchemist_dragon_cave_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/lightning_dragon_female_cave', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/lightning_dragon_female_cave', 'wa:alchemist_dragon_cave_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/fire_dragon_roost', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/ice_dragon_roost', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/lightning_dragon_roost', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/mausoleum_chest', 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, 'iceandfire:chest/myrmex_loot_chest', 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);

        // Overhauled Structures chests for Alchemist
        // Overhauled Spider Dungeon
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovds_loot_tables\/.*/, 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovds_loot_tables\/.*/, 'wa:dungeon_crawl_stage_3_alchemist', STAGES.ALCHEMIST);
        // Overhauled Basic Dungeon
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovbd_loot_tables\/.*/, 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovbd_loot_tables\/.*/, 'wa:dungeon_crawl_stage_2_alchemist', STAGES.ALCHEMIST);
        // Overhauled Dungeon Prison
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovdp_loot_tables\/.*/, 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, /overhauledstructures:chests\/ovdp_loot_tables\/.*/, 'wa:dungeon_crawl_stage_3_alchemist', STAGES.ALCHEMIST);

        // SGJourney Chests for Alchemist
        addStagedCustomLootTableModifier(event, /sgjourney:chests\/.*/, 'wa:dungeon_crawl_stage_3_alchemist', STAGES.ALCHEMIST);

        // Dungeons Arise chests for Alchemist
        addStagedCustomLootTableModifier(event, /dungeons_arise:chests\/.*/, 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, /dungeons_arise:chests\/.*/, 'wa:dungeon_crawl_food_alchemist', STAGES.ALCHEMIST);

        // Dungeons Arise chests
        const dungeonsAriseChests = /dungeons_arise:chests\/.*/;

            addStagedCustomLootTableModifier(event, dungeonsAriseChests, 'wa:dungeons_arise_foundry_barrels', STAGES.ALCHEMIST);
            addStagedCustomLootTableModifier(event, dungeonsAriseChests, 'wa:dungeons_arise_foundry_treasure', STAGES.ALCHEMIST);
            addStagedCustomLootTableModifier(event, dungeonsAriseChests, 'wa:dungeons_arise_mechanical_barrels', STAGES.ALCHEMIST);
            addStagedCustomLootTableModifier(event, dungeonsAriseChests, 'wa:dungeons_arise_general_barrels', STAGES.ALCHEMIST);
            addStagedCustomLootTableModifier(event, dungeonsAriseChests, 'wa:dungeon_crawl_stage_3_alchemist', STAGES.ALCHEMIST);


        // Bosses of Mass Destruction chests for Alchemist
        const bossStructureChests = /bosses_of_mass_destruction:chests\/.*/;
        addStagedCustomLootTableModifier(event, bossStructureChests, 'wa:dungeon_crawl_stage_3_alchemist', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, bossStructureChests, 'wa:alchemist_valuable_chest', STAGES.ALCHEMIST);

        // Nova Structures chests for Alchemist
        addStagedCustomLootTableModifier(event, /nova_structures:chests\/.*/, 'wa:alchemist_materials_chest', STAGES.ALCHEMIST);
        addStagedCustomLootTableModifier(event, /nova_structures:chests\/.*/, 'wa:dungeon_crawl_stage_2_alchemist', STAGES.ALCHEMIST);

        
        //Better Fortresses treasure for Alchemist
        const betterFortressChests = /betterfortresses:chests\/.*/;
        addStagedCustomLootTableModifier(event, betterFortressChests, 'wa:betterfortresses_advanced', STAGES.ALCHEMIST);
        

});



console.log('Alchemist stage loot restrictions loaded successfully!');