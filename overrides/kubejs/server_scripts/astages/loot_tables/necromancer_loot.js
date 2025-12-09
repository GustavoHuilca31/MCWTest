// ==========================================
// AStages - Necromancer Stage Loot Tables
// ==========================================
// Loot restrictions for Necromancer stage - unlocks nether star content

console.log('Loading Necromancer stage loot restrictions...');

// ============ LOOTJS INTEGRATION ============
// Use LootJS to add custom wa: loot tables for Necromancer stage

LootJS.modifiers((event) => {

        // Dungeon Crawl stage chests for Necromancer
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_1', 'wa:dungeon_crawl_stage_1_necromancer', STAGES.NECROMANCER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_2', 'wa:dungeon_crawl_stage_2_necromancer', STAGES.NECROMANCER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_3', 'wa:dungeon_crawl_stage_3_necromancer', STAGES.NECROMANCER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_4', 'wa:dungeon_crawl_stage_4_necromancer', STAGES.NECROMANCER);
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/stage_5', 'wa:dungeon_crawl_stage_5_necromancer', STAGES.NECROMANCER);

        // Nether fortress chests for Necromancer
        const netherFortressChests = [
            'minecraft:chests/bastion_treasure',
            'minecraft:chests/nether_bridge'
        ];
        addStagedCustomLootTableModifier(event, netherFortressChests, 'wa:necromancer_armory_chest', STAGES.NECROMANCER);

        // Boss structure chests for Necromancer
        const bossStructureChests = /bosses_of_mass_destruction:chests\/.*/;
        addStagedCustomLootTableModifier(event, bossStructureChests, 'wa:boss_structures_chest', STAGES.NECROMANCER);
        addStagedCustomLootTableModifier(event, bossStructureChests, 'wa:necromancer_valuable_chest', STAGES.NECROMANCER);

        // Enhanced Food for Necromancer
        addStagedCustomLootTableModifier(event, 'dungeoncrawl:chests/food', 'wa:necromancer_food_chest', STAGES.NECROMANCER);

        // Dungeons Arise
        const dungeonsAriseChests =  /dungeons_arise:chests\/.*\//;
        addStagedCustomLootTableModifier(event, dungeonsAriseChests, 'wa:necromancer_valuable_chest', STAGES.NECROMANCER);
        addStagedCustomLootTableModifier(event, dungeonsAriseChests, 'wa:necromancer_armory_chest', STAGES.NECROMANCER);
        
        // Ancient City loot for Necromancer
        addStagedCustomLootTableModifier(event, 'minecraft:chests/ancient_city', 'wa:necromancer_valuable_chest', STAGES.NECROMANCER);


});
console.log('Necromancer stage loot restrictions loaded successfully!');