(function() {
    var idots = getEl(".bigImg .idots", true),
        idota = getEl(".bigImg .idota", true),
        idotw = getEl(".img .idotw", true),
        idotq = getEl(".img .idotq", true),
        idote = getEl(".img .idote", true),
        idotr = getEl(".img .idotr", true),
        idott = getEl(".img .idott", true),
        idoty = getEl(".img .idoty", true),
        idotu = getEl(".img .idotu", true),
        idoti = getEl(".img .idoti", true),
        img1 = getEl(".one img", true),
        img2 = getEl(".two img", true),
        img3 = getEl(".three img", true),
        img4 = getEl(".four img", true),
        img5 = getEl(".five img", true),
        img6 = getEl(".six img", true),
        img7 = getEl(".seven img", true),
        img8 = getEl(".eight img", true),
        img9 = getEl(".nine img", true),
        img10 = getEl(".ten img", true),
        tbox = getEl(".tbox", true),
        tbox2 = getEl(".obox", true),
        tbox3 = getEl(".thbox", true),
        tbox4 = getEl(".fbox", true),
        tbox5 = getEl(".fibox", true),
        tbox6 = getEl(".sbox", true),
        tbox7 = getEl(".sebox", true),
        tbox8 = getEl(".ebox", true),
        tbox9 = getEl(".nbox", true),
        tbox10 = getEl(".tbox", true);
    changelevel(img1, idots, tbox);
    changelevel(img2, idota, tbox2);
    changelevel(img3, idotw, tbox3);
    changelevel(img4, idotq, tbox4);
    changelevel(img5, idote, tbox5);
    changelevel(img6, idotr, tbox6);
    changelevel(img7, idott, tbox7);
    changelevel(img8, idoty, tbox8);
    changelevel(img9, idotu, tbox9);
    changelevel(img10, idoti, tbox10);
    var click = getEl(".clickMenu"),
        tap2 = getEl(".Tap2Menu");
    click.onclick = function() {
        Asubmenu(tap2)
    }
    slideshow();
})()