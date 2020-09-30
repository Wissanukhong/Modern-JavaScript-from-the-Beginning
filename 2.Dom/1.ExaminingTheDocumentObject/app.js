let output = document;
console.log(output);

// keep the cellection in HTML document
output = document.all;
console.log(output);

// keep the cellection in HTML document with array
output = document.all[1];
console.log(output);

// keep the length of the array 
output = document.all[0].length;
console.log(output);

// head
output = document.head;
console.log(output);

// body
output = document.body;
console.log(output);

// domain
output = document.domain;
console.log(output);

// URL
output = document.URL;
console.log(output);

// character Set
output = document.characterSet;
console.log(output);

// content Type
output = document.contentType;
console.log(output);

// forms
output = document.forms;
console.log(output);

// forms array
output = document.forms[0];
console.log(output);

// forms array keep id
output = document.forms[0].id;
console.log(output);

// forms array keep method
output = document.forms[0].method;
console.log(output);

// forms array keep action
output = document.forms[0].action;
console.log(output);

// links
output = document.links;
console.log(output);

// links keep the index of array
output = document.links[0];
console.log(output);

// links keep the  id in the index of array 
output = document.links[0].id;
console.log(output);

// links keep the classname in the index of array 
output = document.links[4].className;
console.log(output);

// links keep the classList in the index of array 
output = document.links[0].classList[0];
console.log(output);

// images
output = document.images;
console.log(output);

// script
output = document.scripts;
console.log(output);

// script source
output = document.scripts[0].getAttribute('src');
console.log(output);

// defind script
let scripts = document.scripts;

// convert scripts to array
let scriptsArray = Array.from(scripts);

// forEach is loop for show the array
scriptsArray.forEach(function (script) {
    console.log(script.getAttribute('src'));
});


// Loop array 
let allScripts = document.scripts;

let scriptsArray = Array.from(allScripts);

for (let i = 0; i < scriptsArray.length; i++) {
    console.log(scriptsArray[i].getAttribute('src'));
}





