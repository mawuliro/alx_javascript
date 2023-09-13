#!/usr/bin/node
function welcome(firstName, lastNme) {
    let fullName = firstName + ' ' + lastNme;
    function displayFullName () {
        alert('Welcome' + ' ' + fullName + '!');
    }

    displayFullName();
}
