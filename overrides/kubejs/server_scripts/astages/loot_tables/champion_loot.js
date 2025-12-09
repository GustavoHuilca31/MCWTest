// AStages - Champion Stage Loot Tables
// ==========================================
// Loot restrictions for Champion stage - ultimate endgame tier

console.log('Loading Champion stage loot restrictions...');

// ============ LOOTJS INTEGRATION ============
// Use LootJS to add custom wa: loot tables for Champion stage

LootJS.modifiers((event) => {

        // Buried treasure for Champion
        addStagedCustomLootTableModifier(event, 'minecraft:chests/buried_treasure', 'wa:buried_treasure_chest', 'champion');
        addStagedCustomLootTableModifier(event, 'minecraft:chests/buried_treasure', 'wa:champion_valuable_chest', 'champion');
        addStagedCustomLootTableModifier(event, 'minecraft:chests/buried_treasure', 'wa:ultimate_endgame_treasure', 'champion');

        // Village armory chests for Champion
        const villageArmoryChests = [
            'minecraft:chests/village/village_armorer',
            'minecraft:chests/village/village_weaponsmith'
        ];
        addStagedCustomLootTableModifier(event, villageArmoryChests, 'wa:champion_armory_chest', 'champion');
        addStagedCustomLootTableModifier(event, villageArmoryChests, 'wa:champion_valuable_chest', 'champion');

        // Dungeon Crawl stage chests for Champion
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_1', 'wa:dungeon_crawl_stage_1_champion', 'champion');
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_2', 'wa:dungeon_crawl_stage_2_champion', 'champion');
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_3', 'wa:dungeon_crawl_stage_3_champion', 'champion');
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_4', 'wa:dungeon_crawl_stage_4_champion', 'champion');
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_5', 'wa:dungeon_crawl_stage_5_champion', 'champion');

        // Food chests for Champion
        addStagedCustomLootTableModifier(event, /dungeoncrawl:chests\/food/, 'wa:champion_food_chest', 'champion');


});


console.log('Champion stage loot restrictions loaded successfully!');