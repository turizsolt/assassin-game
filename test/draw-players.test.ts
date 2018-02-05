const names = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot'];
var {targets, assassins} = getTargetsAndAssasins(names);
console.assert(testOneCircle(names, targets, assassins), "failed");

function testOneCircle(names, targets, assasins){
    var count = names.length;
    var ass = assassins[0];

    for(var i=0;i<count;i++){
        //console.log(ass);
        var ind = names.indexOf(ass);
        names[ind] = null;
        var ass = targets[ind];
    }

    for(var i=0;i<count;i++){
        if(names[i])return false;
    }

    return true;
}
