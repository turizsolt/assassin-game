/**
 * Created by zsiri on 2016.08.25..
 */

//for(var k=0;k<10000;k++){

var assassins = [
    'Adam',
    'Bob',
    'Charles',
    'Dean',
    'Elisa',
    'Frederic',
    'George'
];
var count = assassins.length;

var targets = [null, null, null, null, null, null, null];

var pool = [0, 1, 2, 3, 4, 5, 6];

shuffle(pool);

for(var i=0;i<count;i++){
    targets[i] = assassins[pool[(pool.indexOf(i)+1)%count]];
}

// checking

/*
console.log(pool);
console.log(assassins);
console.log(targets);
*/

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

var names = [
    'Adam',
    'Bob',
    'Charles',
    'Dean',
    'Elisa',
    'Frederic',
    'George'
];

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

//console.log(
//if(!testOneCircle()) throw "Test condition not met.";
//);

//}
//console.log("Test successed.");
