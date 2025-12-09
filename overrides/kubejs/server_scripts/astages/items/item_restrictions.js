// ==========================================
// AStages - Item Restrictions per Stage
// ==========================================
// Migrated from CraftTweaker to KubeJS AStages

console.log('Loading AStages item restrictions...');

// ============ PRIMITIVE STAGE RESTRICTIONS ============
// Primitive stage cannot use advanced tools/weapons/armor

// Block GTCEU items until Engineer stage
AStages.addRestrictionForMod('gtceu/engineer', 'engineer', 'gtceu');

// Block Tinker's Construct advanced items until Tinkerer stage
AStages.addRestrictionForItem('tinkerer', 'tconstruct:tinker_station');
AStages.addRestrictionForItem('tinkerer', 'tconstruct:part_builder');
AStages.addRestrictionForItem('tinkerer', 'tconstruct:tinkers_anvil');
AStages.addRestrictionForItem('tinkerer', 'tconstruct:smeltery_controller');

// Block advanced materials
AStages.addRestrictionForItem('tinkerer', 'tconstruct:pattern');
AStages.addRestrictionForItem('tinkerer', 'tconstruct:seared_brick');

// Block iron+ tier TC parts until Tinkerer
AStages.addRestrictionForTag('tconstruct:parts/tinkerer','tinkerer', 'tconstruct:parts');

// ============ TINKERER STAGE UNLOCKS ============
// Tinkerer unlocks basic TC crafting

// Unlock basic TC stations
// (Items are automatically unlocked when reaching the stage)

// Block bronze+ materials until Engineer
AStages.addRestrictionForItem('engineer', 'tconstruct:bronze_ingot');
AStages.addRestrictionForItem('engineer', 'gtceu:bronze_ingot');

// ============ ENGINEER STAGE UNLOCKS ============
// Engineer unlocks smeltery and bronze materials

// Block advanced GTCEU machines until Alchemist
AStages.addRestrictionForItem('alchemist', 'gtceu:lv_machine_hull');
AStages.addRestrictionForItem('alchemist', 'gtceu:mv_machine_hull');
AStages.addRestrictionForItem('alchemist', 'gtceu:hv_machine_hull');

// Block advanced alloys
AStages.addRestrictionForItem('alchemist', 'gtceu:steel_ingot');
AStages.addRestrictionForItem('alchemist', 'gtceu:aluminium_ingot');

// ============ ALCHEMIST STAGE UNLOCKS ============
// Alchemist unlocks GTCEU tech progression

// Block end-tier materials until Necromancer
AStages.addRestrictionForItem('necromancer', 'minecraft:nether_star');
AStages.addRestrictionForItem('necromancer', 'gtceu:naquadah_ingot');
AStages.addRestrictionForItem('necromancer', 'gtceu:enriched_naquadah_ingot');

// Block end dimension access until Master
AStages.addRestrictionForDimension('end/master','master', 'minecraft:the_end');

// ============ NECROMANCER STAGE UNLOCKS ============
// Necromancer unlocks nether star and wither-related content

// Block dragon-related items until Master
AStages.addRestrictionForItem('master', 'minecraft:dragon_egg');
AStages.addRestrictionForItem('master', 'minecraft:dragon_head');
AStages.addRestrictionForItem('master', 'minecraft:dragon_breath');

// ============ MASTER STAGE UNLOCKS ============
// Master unlocks end dimension and dragon items

// Block creative-tier items until Champion
AStages.addRestrictionForItem('champion', 'minecraft:bedrock');
AStages.addRestrictionForItem('champion', 'minecraft:structure_void');
AStages.addRestrictionForItem('champion', 'minecraft:barrier');

/* // Block ultimate endgame mods until Champion
AStages.addRestrictionForMod('champion', 'draconicevolution'); */

// ============ CHAMPION STAGE UNLOCKS ============
// Champion unlocks everything - no additional restrictions

console.log('AStages item restrictions loaded successfully!');