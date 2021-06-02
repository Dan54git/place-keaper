'use strict';

const KEY = 'userData';
const forcasts = ['Winter', 'Summer', 'Between']

var gPrefrences;

function getPrefrences() {
    gPrefrences = loadFromStorage(KEY)
    if(!gPrefrences) {
        gPrefrences = {
            textColor: 'black',
            bgColor: '#ffff'
        }
    }
    return gPrefrences;
}

function setPrefrences(gPrefrences) {
    saveToStorage(KEY, gPrefrences)
}

function getMonth() {

} 

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}

// function _savePrefrencesToStorage() {
//     saveToStorage(KEY, gPrefrences)
// }