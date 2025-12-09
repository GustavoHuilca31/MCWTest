// ==========================================
// AStages - Tinkerer Stage Loot Tables
// ==========================================
// Loot restrictions for Tinkerer stage - unlocks Tinker's Construct

console.log('Loading Tinkerer stage loot restrictions...');

// ============ LOOTJS INTEGRATION ============
// Use LootJS to add custom wa: loot tables for Tinkerer stage

LootJS.modifiers((event) => {

        // Village general chests for Tinkerer
        const villageArmoryChests = [
            'minecraft:chests/village/village_armorer',
            'minecraft:chests/village/village_weaponsmith',
            'minecraft:chests/village/village_toolsmith',
            'ati_structures:chests/armory'
        ];
        addStagedCustomLootTableModifier(event, villageArmoryChests, 'wa:tinkerer_armory_chest', STAGES.TINKERER);
        addStagedCustomLootTableModifier(event, villageArmoryChests, 'wa:tinkerer_crafting_chest', STAGES.TINKERER);

        // Structure chests for Tinkerer
        const structureChests = [
            'ati_structures:chests/crafting',
            'minecraft:chests/abandoned_mineshaft',
            'minecraft:chests/stronghold/library'
        ];
        addStagedCustomLootTableModifier(event, structureChests, 'wa:tinkerer_crafting_chest', STAGES.TINKERER);

        // General village chests for Tinkerer
        //const generalVillageChests = getChestLootTablesFromMod('minecraft:chests').filter(table => table.includes('village'));
        //Replace with regex
        const generalVillageChests =  /minecraft:chests\/village\/.*/;
        addStagedCustomLootTableModifier(event, generalVillageChests, 'wa:tinkerer_general_chest', STAGES.TINKERER);
        addStagedCustomLootTableModifier(event, generalVillageChests, 'wa:tinkerer_food_chest', STAGES.TINKERER);

        //const trekChests = getChestLootTablesFromMod('trek:overworld');
        //Replace with regex
        const trekChests = /trek:overworld\/.*/;
        addStagedCustomLootTableModifier(event, trekChests, 'wa:tinkerer_general_chest', STAGES.TINKERER);
        addStagedCustomLootTableModifier(event, trekChests, 'wa:tinkerer_food_chest', STAGES.TINKERER);



});

console.log('Tinkerer stage loot restrictions loaded successfully!');