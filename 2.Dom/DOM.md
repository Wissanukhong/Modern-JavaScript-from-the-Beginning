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
  - [DOM Selector for mutiple Elements](#dom-selector-for-mutiple-elements)
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

## DOM Selector for mutiple Elements

## Traversing The DOM

## Creating Elements

## Removing & Replacing Elements

## Event Listeners & Event Object

## Mouse Event

## Keyboard Event

## Local & Session storage

```

```
