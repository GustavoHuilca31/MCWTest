// Modify spawner blocks to have more health
BlockEvents.modification(event => {
    event.modify('minecraft:spawner', block => {
        block.destroySpeed = 75.0; // Increase the time it takes to break a spawner
    });
});

//Modify waystone blocks to have more health
BlockEvents.modification(event => {
    event.modify(/waystones:.*/, block => {
        block.destroySpeed = 50.0; // Increase the time it takes to break a waystone
    });
});