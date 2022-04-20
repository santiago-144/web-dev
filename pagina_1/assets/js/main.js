
'use strict'
const switcher= document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    //document.body.classList.toggle('light-theme')

    var className = document.body.className;
    if(className == "dark-theme") {
        this.textContent = "light";
    }
    else {
        this.textContent = "dark";
    }
console.log('current class name: ' + className); 
});


