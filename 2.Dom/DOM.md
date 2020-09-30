# DOM

DOM is document Object Model and javaScript can be used to read/write manipulate to the DOM. This picture can be explained DOM very easy.

![DOM](../img/DOM%20model.png)

- [DOM](#dom)
  - [Examining The Document object](#examining-the-document-object)
    - [setup](#setup)
    - [keep the cellection in HTML document](#keep-the-cellection-in-html-document)
    - [keep the cellection in HTML document with array](#keep-the-cellection-in-html-document-with-array)
    - [keep the length of the array](#keep-the-length-of-the-array)
    - [head](#head)
    - [body](#body)
    - [Domain](#domain)
    - [URL](#url)
    - [characterSet](#characterset)
    - [contentType](#contenttype)
    - [forms](#forms)
    - [forms array](#forms-array)
    - [forms array keep id](#forms-array-keep-id)
    - [forms array keep method](#forms-array-keep-method)
    - [forms array keep action](#forms-array-keep-action)
    - [links](#links)
    - [links keep the index of array](#links-keep-the-index-of-array)
    - [links keep the id in the index of array](#links-keep-the-id-in-the-index-of-array)
    - [links keep the classname in the index of array](#links-keep-the-classname-in-the-index-of-array)
    - [links keep the classList in the index of array](#links-keep-the-classlist-in-the-index-of-array)
    - [images](#images)
    - [script](#script)
    - [script source](#script-source)
    - [forEach loop in array](#foreach-loop-in-array)
    - [forloop loop the value in array](#forloop-loop-the-value-in-array)
  - [DOM Selector for single Elements](#dom-selector-for-single-elements)
    - [Document.getElemantById('ID')](#documentgetelemantbyidid)
    - [Get things from the element](#get-things-from-the-element)
    - [Change style](#change-style)
    - [Change content](#change-content)
    - [document.querySelector()](#documentqueryselector)
  - [DOM Selector for mutiple Elements](#dom-selector-for-mutiple-elements)
    - [document.getElementsByClassName](#documentgetelementsbyclassname)
    - [document.getElementsByTagName](#documentgetelementsbytagname)
    - [conver HTML collection into array](#conver-html-collection-into-array)
    - [reverse](#reverse)
    - [forEach](#foreach)
    - [document.querySelectorAll](#documentqueryselectorall)
    - [Odd and Even](#odd-and-even)
  - [Traversing The DOM](#traversing-the-dom)
  - [Creating Elements](#creating-elements)
  - [Removing & Replacing Elements](#removing--replacing-elements)
  - [Event Listeners & Event Object](#event-listeners--event-object)
  - [Mouse Event](#mouse-event)
  - [Keyboard Event](#keyboard-event)
  - [Local & Session storage](#local--session-storage)

## Examining The Document object

### setup

```js
let output = document;
console.log(output);
```

### keep the cellection in HTML document

```js
output = document.all;
console.log(output);
```

### keep the cellection in HTML document with array

```js
output = document.all[1];
console.log(output);
```

### keep the length of the array

```js
output = document.all[0].length;
console.log(output);
```

### head

```js
output = document.head;
console.log(output);
```

### body

```js
output = document.body;
console.log(output);
```

### Domain

```js
output = document.domain;
console.log(output);
```

### URL

```js
output = document.URL;
console.log(output);
```

### characterSet

```js
output = document.characterSet;
console.log(output);
```

### contentType

```js
output = document.contentType;
console.log(output);
```

### forms

```js
output = document.forms;
console.log(output);
```

### forms array

```js
output = document.forms[0];
console.log(output);
```

### forms array keep id

```js
output = document.forms[0].id;
console.log(output);
```

### forms array keep method

```js
output = document.forms[0].method;
console.log(output);
```

### forms array keep action

```js
output = document.forms[0].action;
console.log(output);
```

### links

```js
output = document.links;
console.log(output);
```

### links keep the index of array

```js
output = document.links[0];
console.log(output);
```

### links keep the id in the index of array

```js
output = document.links[0].id;
console.log(output);
```

### links keep the classname in the index of array

```js
output = document.links[4].className;
console.log(output);
```

### links keep the classList in the index of array

```js
output = document.links[0].classList[0];
console.log(output);
```

### images

```js
output = document.images;
console.log(output);
```

### script

```js
output = document.scripts;
console.log(output);
```

### script source

```js
output = document.scripts[0].getAttribute("src");
console.log(output);
```

### forEach loop in array

```js
// defind script
let scripts = document.scripts;

// convert scripts to array
let scriptsArray = Array.from(scripts);

// forEach is loop for show the array
scriptsArray.forEach(function (script) {
  console.log(script.getAttribute("src"));
});
```

### forloop loop the value in array

```js
// Loop array
let allScripts = document.scripts;

let scriptsArray = Array.from(allScripts);

for (let i = 0; i < scriptsArray.length; i++) {
  console.log(scriptsArray[i].getAttribute("src"));
}
```

## DOM Selector for single Elements

### Document.getElemantById('ID')

```js
document.getElementById("main");
```

### Get things from the element

```js
document.getElementById("main").id;
console.log(document.getElementsByClassName("card-content")[0]);
```

### Change style

```js
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";
document.getElementById("task-title").style.textTransform = "uppercase";
```

### Change content

```js
document.getElementById("task-title").textContent = "Task List";
document.getElementById("task-title").innerText = "My task";
document.getElementById("task-title").innerHTML =
  '<span style="color:red">Task List</span>';
```

### document.querySelector()

```js
document.querySelector("#task-title"); // query selector by ID
document.querySelector(".card-title"); // query selector by className
document.querySelector("h5"); // query selector by HTML Tag
```

## DOM Selector for mutiple Elements

### document.getElementsByClassName

```js
let items = document.getElementsByClassName("collection-item");
console.log(items);
```

### document.getElementsByTagName

```js
let lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "red";
lis[3].textContent = "Hello";
```

### conver HTML collection into array

```js
lis = Array.from(lis);
```

### reverse

```js
lis.reverse();
console.log(lis);
```

### forEach

```js
lis.forEach(function (li, index) {
  li.textContent = `${index}: Hello`;
});
```

### document.querySelectorAll

```js
document.querySelectorAll;
const items = document.querySelectorAll("ul.collection li.collection-item");
console.log(items);

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});
```

### Odd and Even

```js
const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li) {
  li.style.background = "#ccc";
});

liEven.forEach(function () {
  li.style.background = "#fff";
});
```

## Traversing The DOM

## Creating Elements

## Removing & Replacing Elements

## Event Listeners & Event Object

## Mouse Event

## Keyboard Event

## Local & Session storage

```

```
