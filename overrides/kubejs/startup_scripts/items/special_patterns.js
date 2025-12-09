// Special Patterns for machine/block duplication

// GTCEU tiers

const tiers = [
    { id: 'lv_special_pattern', name: 'LV Special Pattern', tooltip: 'Used for duplicating low voltage machines and blocks.'},
    { id: 'mv_special_pattern', name: 'MV Special Pattern', tooltip: 'Used for duplicating medium voltage machines and blocks.' },
    { id: 'hv_special_pattern', name: 'HV Special Pattern', tooltip: 'Used for duplicating high voltage machines and blocks.' },
    { id: 'ev_special_pattern', name: 'EV Special Pattern', tooltip: 'Used for duplicating extreme voltage machines and blocks.' },
    { id: 'iv_special_pattern', name: 'IV Special Pattern', tooltip: 'Used for duplicating insane voltage machines and blocks.' },
    { id: 'luv_special_pattern', name: 'LuV Special Pattern', tooltip: 'Used for duplicating ludicrous voltage machines and blocks.' }];

StartupEvents.registry('item', event => {
    tiers.forEach(tier => {
        event.create(tier.id)
            .displayName(tier.name)
            .tooltip(tier.tooltip)
            .rarity('EPIC')
            .unstackable()
            .texture('wa:item/' + tier.id)
            .tag('wa:special_patterns');
    });
});

// Special Patterns for multiblock duplication
const multiblockPatterns = [
    { id: 'multiblock_special_pattern', name: 'Multiblock Special Pattern', tooltip: 'Used for duplicating multiblock structures.' }
];

//This pattern has limited uses and is consumed upon duplication
StartupEvents.registry('item', event => {
    multiblockPatterns.forEach(pattern => {
        event.create(pattern.id)
            .displayName(pattern.name)
            .tooltip(pattern.tooltip)
            .rarity('EPIC')
            .unstackable()
            .texture('wa:item/' + pattern.id)
            .maxDamage(4)
            .tag('wa:special_patterns');
    });
});

