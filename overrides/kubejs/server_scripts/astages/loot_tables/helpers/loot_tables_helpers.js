// priority: 4
/* getItemsFromTable
    * Helper function to get a list of items from a loot table.
    * Returns the item id, nbt data, and count.
*/
function getItemsFromTable(lootTableId) {
    let items = new Map();
    LootJS.modifiers((event) => {
        event.addLootTableModifier(lootTableId)
        .apply((context) => {
            context.forEachLoot((itemstack) => {
                let itemId = itemstack.getItem().getId();
                
                if (items.has(itemId)) {
                    items.set(itemId, items.get(itemId) + itemstack.getCount());
                }
                else {
                    items.set(itemId, itemstack.getCount());
                }

            });
        })
    });
    return items;
}

function getNbtFromTable(lootTableId) {
    let nbtData = new Map();
    LootJS.modifiers((event) => {
        event.addLootTableModifier(lootTableId)
        .apply((context) => {
            context.forEachLoot((itemstack) => {
                let itemId = itemstack.getItem().getId();
                let nbt = itemstack.getNbt();
                if (nbt && !nbt.isEmpty()) {
                    nbtData.set(itemId, nbt);
                }
            });
        })
    });
    return nbtData;
}

function addStagedCustomLootTableModifier(event, lootTableId, customLootTableId, stage) {
    // Validate input - if lootTableId is an array and it's empty, don't proceed
    if (Array.isArray(lootTableId) && lootTableId.length === 0) {
        console.log(`Skipping loot table modifier for ${customLootTableId} - no loot tables provided or invalid input.`);
        return;
    }
    
    event.addLootTableModifier(lootTableId)
    .hasAnyStage(stage)
    .apply((context) => {
        context.server.lootData
        .getLootTable(customLootTableId)
        .getRandomItemsRaw(context.vanillaContext, (item) => {
            context.loot.add(item);
        });
    });
}

function getChestLootTablesFromMod(modId) {
    let lootTables = [];
    allDefinedLootTables.forEach((tableId) => {
        if (tableId.startsWith(modId)) {
            lootTables.push(tableId);
        }
    });
    console.log(`Found ${lootTables.length} chest loot tables from mod ${modId}`);
    return lootTables;
}

function replaceStagedItemsInLootTable(event, lootTableId, itemsToReplace, replacingItem, stage) {
    // itemsToReplace can be a single item, array of items, or ItemFilter
    // replacingItem should be a single item ID or LootEntry
    event.addLootTableModifier(lootTableId)
    .hasAnyStage(stage)
    .replaceLoot(itemsToReplace, replacingItem, true); // preserveCount = true
}