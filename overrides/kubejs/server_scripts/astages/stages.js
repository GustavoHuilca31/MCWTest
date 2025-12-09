// priority: 3
// ==========================================
// AStages - Stage Definition and Triggers
// ==========================================
// Migrated from CraftTweaker GameStages to KubeJS AStages

// Define all stages and their unlock conditions
console.log('Loading AStages configuration...');

//Define KubeJS Stages
const STAGES = {
    PRIMITIVE: 'primitive',
    TINKERER: 'tinkerer',
    ENGINEER: 'engineer',
    ALCHEMIST: 'alchemist',
    NECROMANCER: 'necromancer',
    MASTER: 'master',
    CHAMPION: 'champion'
};

// ============ STAGE DEFINITIONS ============
// 0. "Primitive" - Granted automatically on join
PlayerEvents.loggedIn(event => {
    if (!AStages.playerHasStage('primitive', event.player)) {
        AStages.addStageToPlayer('primitive', event.player);
        event.player.stages.add(STAGES.PRIMITIVE);
    }
});

// 1. "Tinkerer" - Unlock when crafting Tinker Station
ItemEvents.crafted(event => {
    if (event.item.id === 'tconstruct:tinker_station') {
        if (!AStages.playerHasStage('tinkerer', event.player)) {
            AStages.addStageToPlayer('tinkerer', event.player);
            event.player.stages.add(STAGES.TINKERER);
        }
    }
});

// 2. "Engineer" - Unlock on tconstruct smeltery advancement
PlayerEvents.advancement(event => {
    if (event.advancement.id === 'tconstruct:smeltery/structure') {
        if (!AStages.playerHasStage('engineer', event.player)) {
            AStages.addStageToPlayer('engineer', event.player);
            event.player.stages.add(STAGES.ENGINEER);
        }
    }
});

// 3. "Alchemist" - Unlock when crafting MV Machine Hull
ItemEvents.crafted(event => {
    if (event.item.id === 'gtceu:mv_machine_hull') {
        if (!AStages.playerHasStage('alchemist', event.player)) {
            AStages.addStageToPlayer('alchemist', event.player);
            event.player.stages.add(STAGES.ALCHEMIST);
        }
    }
});

// 4. "Necromancer" - Unlock when killing Wither
EntityEvents.death(event => {
    if (event.entity.type === 'minecraft:wither' && event.source.player) {
        let player = event.source.player;
        if (!AStages.playerHasStage('necromancer', player)) {
            AStages.addStageToPlayer('necromancer', player);
            player.stages.add(STAGES.NECROMANCER);
        }
    }
});

// 5. "Master" - Unlock when killing Ender Dragon
EntityEvents.death(event => {
    if (event.entity.type === 'minecraft:ender_dragon' && event.source.player) {
        let player = event.source.player;
        if (!AStages.playerHasStage('master', player)) {
            AStages.addStageToPlayer('master', player);
            player.stages.add(STAGES.MASTER);
        }
    }
});

// 6. "Champion" - Unlock when picking up bedrock
PlayerEvents.inventoryChanged(event => {
    if (event.item && event.item.id === 'minecraft:bedrock') {
        if (!AStages.playerHasStage('champion', event.player)) {
            AStages.addStageToPlayer('champion', event.player);
            event.player.stages.add(STAGES.CHAMPION);
        }
    }
});

// ============ STAGE CUSTOMIZATION ============
// Custom titles and messages for each stage
AStages.customizeStage('primitive')
    .setAddTitle('§aPrimitive Stage Unlocked!')
    .setStay(100);

AStages.customizeStage('tinkerer')
    .setAddTitle('§6Tinkerer Stage Unlocked!')
    .setStay(100);

AStages.customizeStage('engineer')
    .setAddTitle('§9Engineer Stage Unlocked!')
    .setStay(100);

AStages.customizeStage('alchemist')
    .setAddTitle('§dAlchemist Stage Unlocked!')
    .setStay(100);

AStages.customizeStage('necromancer')
    .setAddTitle('§8Necromancer Stage Unlocked!')
    .setStay(100);

AStages.customizeStage('master')
    .setAddTitle('§bMaster Stage Unlocked!')
    .setStay(100);

AStages.customizeStage('champion')
    .setAddTitle('§cChampion Stage Unlocked!')
    .setStay(100);

// ============ STAGE EVENTS ============
// Log stage additions for debugging
AStageEvents.added(event => {
    console.log(`Player ${event.player.username} gained stage: ${event.stage}`);
});

AStageEvents.removed(event => {
    console.log(`Player ${event.player.username} lost stage: ${event.stage}`);
});

// Modify AStages commands to sync with KubeJS stage system
// example: /astages add <player> <stage>
console.log('AStages configuration loaded successfully!');