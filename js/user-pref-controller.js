'use strict';




function onSavePref(ev) {
    ev.preventDefault();
    var elTextColor = document.querySelector('input[name=textColor]');
    var elBgColor = document.querySelector('input[name=bgColor]');
    var elDOB = document.querySelector('input[name=dob]');
    var elEmail = document.querySelector('input[name=email]');
    var elAge = document.querySelector('input[name=age]');
    
    const userPref = {
        textColor: elTextColor.value,
        bgColor: elBgColor.value,
        dob: elDOB.value,
        email:elEmail.value,
        age:elAge.value,
    }
    console.log('elTextColor.value ' ,elTextColor.value);
    console.log('elBgColor.value' ,elBgColor.value);
    console.log('elDOB.value' ,elDOB.value);

    setPrefrences(userPref)
}