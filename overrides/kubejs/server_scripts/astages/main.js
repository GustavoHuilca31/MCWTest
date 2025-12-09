//priority: 1

// ==========================================
// AStages - Main Integration Script
// ==========================================
// Migration from CraftTweaker GameStages to KubeJS AStages
// Handles all stage-related integrations and mod compatibility

console.log('Starting AStages integration for WaneCraft modpack...');

// ============ MOD INTEGRATIONS ============
// Handle mod-specific stage integrations

// Jade integration - stage-based information display
PlayerEvents.loggedIn(event => {
    const player = event.player;
    
    // Configure Jade based on current stage
    if (!AStages.playerHasStage('tinkerer', player)) {
        // Hide advanced information for primitive players
        player.tell('§7Some information is hidden until you progress further.');
    }
});




// ============ DEBUGGING AND MONITORING ============
// Development tools for testing and debugging

PlayerEvents.chat(event => {
    const player = event.player;
    const message = event.message;
    
    // Debug command to check stages
    if (message.startsWith('/debug stages') && player.op) {
        event.cancel();
        const stages = AStages.getStagesFromPlayer(player);
        player.tell('§6Current stages: ' + stages.join(', '));
    }
    
    // Debug command to grant all stages
    if (message.startsWith('/debug grant all') && player.op) {
        event.cancel();
        ['primitive', 'tinkerer', 'engineer', 'alchemist', 'necromancer', 'master', 'champion'].forEach(stage => {
            AStages.addStageToPlayer(stage, player);
        });
        player.tell('§aAll stages granted!');
    }
});


// ============ EVENT LOGGING ============
// Log important stage events for server administration

AStageEvents.added(event => {
    const player = event.player;
    const stage = event.stage;
    
    console.log(`[AStages] Player ${player.username} gained stage: ${stage}`);
    
    // Broadcast important stages
    if (['necromancer', 'master', 'champion'].includes(stage)) {
        event.server.tell(`§6${player.displayName} §7has reached the §e${stage.toUpperCase()} §7stage!`);
    }
});

AStageEvents.removed(event => {
    const player = event.player;
    const stage = event.stage;
    
    console.log(`[AStages] Player ${player.username} lost stage: ${stage}`);
});
