var players = getPlayerNames();
var {targets, assassins} = getTargetsAndAssasins(players);
var person = -1;
var hide = false;

$(document).ready(function(){
    $('#show').click(onShowClick);
    $('#next').click(onNextClick);
});

function onShowClick(e) {
    if(hide == true) {
        hide = false;
        $("#target").text(targets[person]);
    }
}

function onNextClick(e) {
    if(hide == false) {
        person++;
        hide = true;
        $("#assasin").text(assassins[person]);
        $("#target").text("");
    }
}
