var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/green_light.png') {
        myImage.setAttribute('src', 'images/red_light.png');
    } else {
        myImage.setAttribute('src', 'images/green_light.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
    if (!localStorage.getItem('name')) {
        setUserName();
        return;
    }

    if (confirm('Would you like to change user?')) {
        setUserName();
        return;
    }

    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

//myButton.onclick = function() {
//    setUserName();
//}