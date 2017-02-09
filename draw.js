/**
 * Created by zsiri on 2016.08.25..
 */

var assassins = deepArrayCopy(playerNames);

var count = assassins.length;

var targets = [];
var pool = [];

for(var i=0;i<count;i++) {
    targets.push(null);
    pool.push(i);
}

shuffle(pool);

for(var i=0;i<count;i++){
    targets[i] = assassins[pool[(pool.indexOf(i)+1)%count]];
}

// init

var person = -1;
var hide = false;

// jquery


$(document).ready(function(){
    $('#show').click(function(e){
        if(hide == true){
            hide = false;
            $("#target").text(targets[person]);
        }
    });

    $('#next').click(function(e){
        if(hide == false){
            person++;
            hide = true;
            $("#assasin").text(assassins[person]);
            $("#target").text("");
        }
    });
});


// misc
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

var names = deepArrayCopy(playerNames);

function testOneCircle(){
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

function deepArrayCopy(old){
    var newone = [];
    for(var i=0;i<old.length;i++){
        newone.push(old[i]);
    }
    return newone;
}
