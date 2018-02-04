// TODO break it into two parts, the chain making process,
// TODO and assigning names to it

function getTargetsAndAssasins(playerNames) {
    var assassins = shallowArrayCopy(playerNames);

    var count = assassins.length;

    var targets = [];
    var pool = [];

    for(var i=0;i<count;i++) {
        targets.push(null);
        pool.push(i);
    }

    // creates a random sequence of 0..n-1
    // eg. 1 5 6 3 4 2 0
    // now the chain will be the following:
    // 1 -> 5 -> 6 -> 3 -> 4 -> 2 -> 0 -> 1
    // this is the reason of .indexOf(i)+1

    shuffle(pool);

    for(var i=0;i<count;i++){
        targets[i] = assassins[pool[(pool.indexOf(i)+1)%count]];
    }

    return {targets, assassins};
}
