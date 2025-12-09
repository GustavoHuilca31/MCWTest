// ==========================================
// AStages - Primitive Stage Loot Tables
// ==========================================
// Loot restrictions for Primitive stage only

console.log('Loading Primitive stage loot restrictions...');

// ============ LOOTJS INTEGRATION ============
// Use LootJS to replace vanilla loot tables with custom wa: loot tables

const vanillaArmor = [
    'minecraft:leather_helmet', 'minecraft:leather_chestplate', 'minecraft:leather_leggings', 'minecraft:leather_boots',
    'minecraft:chainmail_helmet', 'minecraft:chainmail_chestplate', 'minecraft:chainmail_leggings', 'minecraft:chainmail_boots',
    'minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots',
    'minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots',
    'minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots',
    'minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots'
];

const vanillaWeapons = [
    'minecraft:wooden_sword', 'minecraft:stone_sword', 'minecraft:iron_sword',
    'minecraft:golden_sword', 'minecraft:diamond_sword', 'minecraft:netherite_sword',
    'minecraft:wooden_axe', 'minecraft:stone_axe', 'minecraft:iron_axe',
    'minecraft:golden_axe', 'minecraft:diamond_axe', 'minecraft:netherite_axe'
];

const vanillaTools = [
    'minecraft:wooden_pickaxe', 'minecraft:stone_pickaxe', 'minecraft:iron_pickaxe',
    'minecraft:golden_pickaxe', 'minecraft:diamond_pickaxe', 'minecraft:netherite_pickaxe',
        'minecraft:wooden_shovel', 'minecraft:stone_shovel', 'minecraft:iron_shovel',
        'minecraft:golden_shovel', 'minecraft:diamond_shovel', 'minecraft:netherite_shovel',
        'minecraft:wooden_hoe', 'minecraft:stone_hoe', 'minecraft:iron_hoe',
        'minecraft:golden_hoe', 'minecraft:diamond_hoe', 'minecraft:netherite_hoe'
];

LootJS.modifiers((event) => {

        // Replace vanilla armor with primitive armor for Primitive stage
        event.addLootTableModifier(/.*/)
            .removeLoot(vanillaArmor)
            .pool((pool) => {
                pool.addLoot('wa:primitive_armor');
            });

        // Replace vanilla weapons with primitive weapons for Primitive stage
        event.addLootTableModifier(/.*/)
            .removeLoot(vanillaWeapons)
            .pool((pool) => {
                pool.addLoot('wa:primitive_weapons');
            });

        // Replace vanilla tools with primitive tools for Primitive stage
        event.addLootTableModifier(/.*/)
            .removeLoot(vanillaTools)
            .pool((pool) => {
                pool.addLoot('wa:primitive_weapons');
            });

        // Village chests and basic structures for Primitive stage
        // Using regex patterns to match loot tables
        const primitiveChestPatterns = [
            /minecraft:chests\/village\/.*/,           // All village chests
            /ati_structures:.*/,                       // All ati_structures chests
            'minecraft:chests/stronghold/corridor',
            'minecraft:chests/abandoned_mineshaft',
            'minecraft:chests/desert_pyramid',
            'minecraft:chests/woodland_mansion',
            'minecraft:chests/jungle_temple',
            'minecraft:chests/igloo_chest',
            'minecraft:chests/shipwreck_supply',
            'minecraft:chests/pillager_outpost',
            'minecraft:chests/ruined_portal'
        ];
        
        primitiveChestPatterns.forEach((pattern) => {
            addStagedCustomLootTableModifier(event, pattern, 'wa:primitive_basic_chest', STAGES.PRIMITIVE);
            addStagedCustomLootTableModifier(event, pattern, 'wa:primitive_food_chest', STAGES.PRIMITIVE);
            addStagedCustomLootTableModifier(event, pattern, 'wa:primitive_general_chest', STAGES.PRIMITIVE);
        });


});

console.log('Primitive stage loot restrictions loaded successfully.');