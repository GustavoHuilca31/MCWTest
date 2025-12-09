// priority: 5


console.log('Loading AStages loot table restrictions system...');

// ============ LOOTJS + ASTAGES INTEGRATION ============
// This system uses both LootJS for dynamic loot modification and AStages for stage restrictions

/**
 * LootJS Integration:
 * - LootJS.modifiers() handles dynamic loot table replacement
 * - .matchStage(stage, true) ensures stage-appropriate loot
 * - Custom wa: loot tables provide curated stage-specific items
 * - .addWeightedLoot() allows for varied loot distribution
 * 
 * AStages Integration:
 * - AStages.addRestrictionForLoot() handles item restrictions
 * - .restrictItems() blocks inappropriate items
 * - .setReplacer() provides fallback items
 * - .applyForEveryLootTableAndDrop() handles global restrictions
 */

// ============ CUSTOM LOOT TABLE INTEGRATION ============
// All custom loot tables from data/wa/loot_tables are integrated:

// Get all loot tables defined in server data

const allDefinedLootTables = new Set();

ServerEvents.loaded((event) => {
    const server = event.server;
    const $LootDataType = Java.loadClass('net.minecraft.world.level.storage.loot.LootDataType');
    let lootData = server.getLootData();
    let lootTables = lootData.getKeys($LootDataType.TABLE);
    lootTables.stream().map(id => id.toString()).forEach(idStr => {
        allDefinedLootTables.add(idStr);
    }
    );
    console.log(`Total defined loot tables loaded: ${allDefinedLootTables.size}`);
});
     

const INTEGRATED_LOOT_TABLES = {
    // Primitive Stage
    'wa:primitive_basic_chest': 'Basic survival items for primitive players',
    'wa:primitive_food_chest': 'Simple food for early game',
    'wa:primitive_general_chest': 'General primitive resources',
    
    // Tinkerer Stage  
    'wa:tinkerer_armory_chest': 'TC components and armor parts',
    'wa:tinkerer_crafting_chest': 'TC crafting materials',
    'wa:tinkerer_food_chest': 'Improved food for tinkerer',
    'wa:tinkerer_general_chest': 'General tinkerer resources',
    
    // Engineer Stage
    'wa:engineer_armory_chest': 'Bronze-tier equipment',
    'wa:engineer_materials_chest': 'Engineering materials',
    'wa:engineer_valuable_chest': 'Valuable engineering resources',
    
    // Alchemist Stage
    'wa:alchemist_armory_chest': 'GTCEU armory items',
    'wa:alchemist_materials_chest': 'GTCEU materials and components',
    'wa:alchemist_valuable_chest': 'Valuable alchemical resources',
    'wa:alchemist_food_chest': 'Enhanced alchemical food',
    
    // Necromancer Stage
    'wa:necromancer_armory_chest': 'End-tier combat equipment',
    'wa:necromancer_valuable_chest': 'High-value necromancer resources',
    'wa:necromancer_food_chest': 'Necromancer-tier food',
    
    // Master Stage
    'wa:master_armory_chest': 'Ultimate tier equipment',
    'wa:master_valuable_chest': 'Master-tier valuable items',
    'wa:master_food_chest': 'Master-tier food items',
    
    // Champion Stage
    'wa:champion_armory_chest': 'Champion-tier ultimate equipment',
    'wa:champion_valuable_chest': 'Champion-tier ultimate resources',
    'wa:champion_food_chest': 'Champion-tier ultimate food',
    'wa:ultimate_endgame_treasure': 'Ultimate endgame rewards'
};



// ============ STAGE-SPECIFIC LOOT FILES ============
// Each stage has its own file for better organization

// Import is handled automatically by KubeJS when files are in the same directory
// Files are loaded in alphabetical order:
// 1. alchemist_loot.js
// 2. champion_loot.js  
// 3. engineer_loot.js
// 4. master_loot.js
// 5. necromancer_loot.js
// 6. primitive_loot.js
// 7. tinkerer_loot.js

// ============ MIGRATION NOTES ============
// From CraftTweaker LootStages to AStages:
// 
// OLD: LootStages.addLootTableReplace("Stage", <resource:source>, <resource:replacement>)
// NEW: AStages.addRestrictionForLoot('id', 'stage')
//        .restrictForLootTables('source')
//        .setLootTableFilter('all')
//        .setReplacer(stack => Item.of('replacement'))
//
// OLD: LootStages.addLootTableItem("Stage", <resource:table>, <item:item>)
// NEW: AStages.addRestrictionForLoot('id', 'stage')
//        .restrictForLootTables('table') 
//        .setLootTableFilter('partial')
//        .restrictItems('unwanted_item')
//        .setReplacer(stack => Item.of('item'))

// ============ COMPREHENSIVE COVERAGE ============
// All loot tables from the original CraftTweaker scripts are covered:

const COVERED_LOOT_TABLES = {
    // Vanilla Minecraft
    'minecraft:chests/abandoned_mineshaft': 'Multiple stages',
    'minecraft:chests/village/*': 'All village chests across stages',
    'minecraft:chests/stronghold/*': 'Stronghold chests',
    'minecraft:chests/end_city_treasure': 'Master/Necromancer',
    'minecraft:chests/bastion_treasure': 'Necromancer',
    'minecraft:chests/ancient_city': 'Master',
    'minecraft:chests/buried_treasure': 'Champion',
    
    // ATI Structures
    'ati_structures:chests/crafting': 'All stages',
    'ati_structures:chests/armory': 'Tinkerer+',
    'ati_structures:chests/resources': 'Multiple stages',
    'ati_structures:chests/*_storage': 'Tinkerer+',
    
    // Apotheosis
    'apotheosis:chests/chest_valuable': 'Primitive+',
    'apotheosis:chests/tome_tower': 'Engineer+',
    'apotheosis:chests/spawner_*': 'Engineer+',
    
    // Dungeon Crawl
    'dungeoncrawl:chests/food': 'All stages',
    'dungeoncrawl:chests/forge': 'Engineer+',
    'dungeoncrawl:chests/stage_*': 'All stages',
    
    // Better Fortresses
    'betterfortresses:chests/*': 'Multiple stages',
    
    // Dungeons Arise
    'dungeons_arise:chests/*/*': 'All stages with appropriate loot',
    
    // Boss Structures
    'bosses_of_mass_destruction:chests/*': 'Necromancer+'
};
