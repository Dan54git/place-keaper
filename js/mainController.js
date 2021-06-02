'use strict';

function onInit() {
    renderPrefrences();
}


function renderPrefrences() {
    var userPref = getPrefrences();

    document.body.style.backgroundColor = userPref.bgColor;
    document.querySelector('p').style.color = userPref.textColor;
}