// ==========================================
// AStages - Recipe Modifications
// ==========================================
// Custom recipes and stage-based crafting restrictions

ServerEvents.recipes(event => {
    console.log('Loading AStages recipe modifications...');
    
    // ============ PRIMITIVE STAGE RECIPES ============
    // Basic survival recipes for primitive stage
    
    // Simple TC tool recipes for primitive stage
    event.shaped('tconstruct:pattern', [
        'WS ',
        'S  ',
        '   '
    ], {
        W: 'minecraft:stick',
        S: 'minecraft:string'
    });
    
    // Basic seared brick recipe
    event.smelting('tconstruct:seared_brick', 'minecraft:brick');
    
    // ============ TINKERER STAGE RECIPES ============
    // Unlock TC crafting when reaching Tinkerer stage
    
    // No additional recipes needed - TC recipes unlock naturally
    
    // ============ ENGINEER STAGE RECIPES ============
    // Bronze age recipes and smeltery progression
    
    // Enhanced bronze recipe
    event.shaped('9x gtceu:bronze_ingot', [
        'CCC',
        'CTC',
        'CCC'
    ], {
        C: 'minecraft:copper_ingot',
        T: 'minecraft:tin_ingot'
    });
    
    // ============ ALCHEMIST STAGE RECIPES ============
    // GTCEU machine progression
    
    // Enhanced LV machine hull recipe
    event.shaped('gtceu:lv_machine_hull', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        P: 'gtceu:steel_plate',
        C: 'gtceu:lv_machine_casing'
    });
    
    // ============ NECROMANCER+ RECIPES ============
    // High-tier progression recipes
    
    // Nether star enhancement
    event.shaped('minecraft:nether_star', [
        'SWS',
        'WNW',
        'SWS'
    ], {
        S: 'minecraft:soul_sand',
        W: 'minecraft:wither_skeleton_skull',
        N: 'minecraft:nether_star'
    });
    
    console.log('AStages recipe modifications loaded!');
});

// ============ STAGE-BASED RECIPE RESTRICTIONS ============
// Block certain recipes until proper stage is reached

ServerEvents.recipes(event => {
    // Remove vanilla tool/weapon/armor recipes (replaced by TC)
    
    // Remove vanilla sword recipes
    event.remove({ output: 'minecraft:wooden_sword' });
    event.remove({ output: 'minecraft:stone_sword' });
    event.remove({ output: 'minecraft:iron_sword' });
    event.remove({ output: 'minecraft:golden_sword' });
    event.remove({ output: 'minecraft:diamond_sword' });
    event.remove({ output: 'minecraft:netherite_sword' });
    
    // Remove vanilla axe recipes
    event.remove({ output: 'minecraft:wooden_axe' });
    event.remove({ output: 'minecraft:stone_axe' });
    event.remove({ output: 'minecraft:iron_axe' });
    event.remove({ output: 'minecraft:golden_axe' });
    event.remove({ output: 'minecraft:diamond_axe' });
    event.remove({ output: 'minecraft:netherite_axe' });
    
    // Remove vanilla pickaxe recipes
    event.remove({ output: 'minecraft:wooden_pickaxe' });
    event.remove({ output: 'minecraft:stone_pickaxe' });
    event.remove({ output: 'minecraft:iron_pickaxe' });
    event.remove({ output: 'minecraft:golden_pickaxe' });
    event.remove({ output: 'minecraft:diamond_pickaxe' });
    event.remove({ output: 'minecraft:netherite_pickaxe' });
    
    // Remove vanilla armor recipes
    event.remove({ output: /minecraft:.*_helmet/ });
    event.remove({ output: /minecraft:.*_chestplate/ });
    event.remove({ output: /minecraft:.*_leggings/ });
    event.remove({ output: /minecraft:.*_boots/ });
});

// ============ DYNAMIC RECIPE STAGING ============
// Recipes that unlock based on player stage

PlayerEvents.loggedIn(event => {
    const player = event.player;
    
    // Check player stages and unlock appropriate recipes
    if (AStages.playerHasStage('tinkerer', player)) {
        // Tinkerer recipes are available
        player.tell('§6Tinker\'s Construct recipes unlocked!');
    }
    
    if (AStages.playerHasStage('engineer', player)) {
        // Engineering recipes are available
        player.tell('§9Engineering recipes unlocked!');
    }
    
    if (AStages.playerHasStage('alchemist', player)) {
        // GTCEU recipes are available
        player.tell('§dGTCEU machinery recipes unlocked!');
    }
});

console.log('AStages recipe system loaded successfully!');