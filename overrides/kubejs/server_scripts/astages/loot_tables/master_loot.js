// ==========================================
// AStages - Master Stage Loot Tables
// ==========================================
// Loot restrictions for Master stage - unlocks end dimension and dragon items

console.log('Loading Master stage loot restrictions...');

// ============ LOOTJS INTEGRATION ============
// Use LootJS to add custom wa: loot tables for Master stage

LootJS.modifiers((event) => {

        // End dimension loot for Master
        addStagedCustomLootTableModifier(event, 'minecraft:chests/end_city_treasure', 'wa:end_city_treasure_chest', STAGES.MASTER);
        addStagedCustomLootTableModifier(event, 'minecraft:chests/ancient_city', 'wa:master_valuable_chest', STAGES.MASTER);

        //Ancient City loot for Master
        addStagedCustomLootTableModifier(event, 'minecraft:chests/ancient_city', 'wa:ancient_city_treasure_chest', STAGES.MASTER);
        addStagedCustomLootTableModifier(event, 'minecraft:chests/ancient_city', 'wa:master_armory_chest', STAGES.MASTER);

        // Ocean Monument loot for Master
        const oceanMonumentChests = [
            'minecraft:chests/underwater_ruin_big',
            'minecraft:chests/underwater_ruin_small'
        ];
        addStagedCustomLootTableModifier(event, oceanMonumentChests, 'wa:ocean_monument_chest', STAGES.MASTER);

        // Dungeon Crawl stage chests for Master
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_1', 'wa:dungeon_crawl_stage_1_master', STAGES.MASTER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_2', 'wa:dungeon_crawl_stage_2_master', STAGES.MASTER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_3', 'wa:dungeon_crawl_stage_3_master', STAGES.MASTER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_4', 'wa:dungeon_crawl_stage_4_master', STAGES.MASTER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_5', 'wa:dungeon_crawl_stage_5_master', STAGES.MASTER);

        // Enhanced food for Master
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/food', 'wa:master_food_chest', STAGES.MASTER);

    

});


console.log('Master stage loot restrictions loaded successfully!');