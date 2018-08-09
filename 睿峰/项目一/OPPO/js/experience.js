(function() {
    var click = getEl(".clickMenu"),
        tap2 = getEl(".Tap2Menu");
    click.onclick = function() {
        Asubmenu(tap2)
    }

})()