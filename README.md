### Interactive pages with JS
https://caniuse.com/
https://developer.mozilla.org/en-US/docs/Web/API/Document

1. Select element on page
2. Manipulating elements
3. Listening for actions 

> When the HTML parser encounters a <script> element, it loads the script then executes its contents before parsing the rest of the HTML. 

### script attribute

* defer
The defer attribute specifies scripts should be executed after the HTML file is completely parsed. it loads the script but defers the actual execution of the JavaScript until after it finishes parsing the rest of the elements in the HTML file.  


should be executed after the HTML file is completely parsed. When the HTML parser encounters a <script> element with the defer attribute, it loads the script but defers the actual execution of the JavaScript until after it finishes parsing the rest of the elements in the HTML file.

When a script contains functionality that requires interaction with the DOM, the defer attribute is the way to go. This way, it ensures that the entire HTML file has been parsed before the script is executed.

to make it the last script that is downloaded and executed.

ensures that the entire HTML file has been parsed before the script is executed.
```

<script src="" defer></script>


```

* async
loads and executes the script asynchronously with the rest of the webpage. This means that, similar to the defer attribute, the HTML parser will continue parsing the rest of the HTML as the script is downloaded in the background. However, with the async attribute, the script will not wait until the entire page is parsed: it will execute immediately after it has been downloaded

useful for scripts that are independent of other scripts in order to function accordingly. Thus, if it does not matter exactly at which point the script file is executed, asynchronous loading is the most suitable option as it optimizes web page load time.
```
<script src="" async></script>
```


### Browser Global Environment
* window object , global scope
* Window Properties

window.alert('txt')
window.location.href
window.innerWidth
window.document.<...>

## Document
All HTML elements are objects. And as we know every object has properties and methods.

```
document.body
document.title
document.URL
```

```
document.body.innerHTML = 'The cat loves the dog.';
document.body.innerHTML = '<h2>This is a heading</h2>'; 
document.body.innerHTML = "<h1>Gritty " + date + "</h1>"
document.getElementsByClassName("") // returns a collection of all elements in the document with the specified class name.
document.getElementsByTagName("HTML TAG") // returns all of the elements of the specified tag name as an array.
document.querySelector(".main-nav a") // match first element
document.querySelectorAll(".post-content p") // match all element

```

Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:

```
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element.

```

change the text content of an element using the innerHTML property.
```
function setText() {
    var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }
}

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 500);
```

## Changing Attributes


Once you have selected the element(s) you want to work with, you can change their attributes.

```
<img id="myimg" src="orange.png" alt="" />
<script>
var el = document.getElementById("myimg");
el.src = "apple.png";
</script>
```

## Changing Style


The style of HTML elements can also be changed using JavaScript.
All style attributes can be accessed using the style object of the element.
```
	<body>
		<div id="demo" style="width:200px">some text</div>
	</body>
    
    window.onload = function() {
    var x = document.getElementById("demo");
    x.style.color = '#6600FF';
    x.style.width = '100px';
};
```

## Creating Elements

Use the following methods to create new nodes:
```
element.cloneNode() clones an element and returns the resulting node.
document.createElement(element) creates a new element node.
document.createTextNode(text) creates a new text node.
```
This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods:
```
var node = document.createTextNode("Some new text");
```
```
```
element.appendChild(newNode) // adds a new child node to an element as the last child node.
element.insertBefore(node1, node2) // inserts node1 as a child before node2.
---

```
window.onload = function() {
    //creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);
};
```

```
var el = document.createElement("li");


var txt = document.createTextNode("B");


el.appendChild(txt);


var ul = document.getElementById("list");


ul.appendChild(el);
```

## Removing Elements


To remove an HTML element, you must select the parent of the element and use the removeChild(node) method.
```
	<body>
		<div id="demo">
            <p id="p1">This is a paragraph.</p>
            <p id="p2">This is another paragraph.</p>
        </div>
	</body>
    
        window.onload = function() {
        
        // method 1
        var parent = document.getElementById("demo");
        var child = document.getElementById("p1");
        parent.removeChild(child);
        
        // method 2
        var child = document.getElementById("p1");
        child.parentNode.removeChild(child);
    };
```

## Replacing Elements


To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used.
```
		<div id="demo">
            <p id="p1">This is a paragraph.</p>
            <p id="p2">This is another paragraph.</p>
        </div>
        
        window.onload = function() {
            var p = document.createElement("p");
            var node = document.createTextNode("This is new");
            p.appendChild(node);

            var parent = document.getElementById("demo");
            var child = document.getElementById("p1");
            parent.replaceChild(p, child);
        };
```

## Animations
clearInterval() method to stop the timer.
```
var t = setInterval(move, 10);

function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}
```

```
	<body>
		<div id="container">
            <div id="box"> </div>
        </div>
	</body>
	
window.onload = function() {
     var pos = 0; 
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);
  
    function move() {
        if(pos >= 150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
};
```
---

## Events

```
<p onclick="someFunc()">some text</p>
```
```
	<body>
		<button id="demo">Click Me</button>
	</body>
	
window.onload = function() {
    var x = document.getElementById('demo');
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
};
	
```
* The onload and onunload events are triggered when the user enters or leaves the page. These can be useful when performing actions after the page is loaded.

```
<body onload="doSomething()">

window.onload = function() {
   //some code
}
```
* The onchange event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.

```
	<body>
		<input type="text" id="name" onchange="change()">
	</body>
	
function change() {
    var x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}
```

## Event Listener

The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. You can add many event handlers to one element.
```
element.addEventListener(event, function, useCapture);

element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}
```

## Event Propagation
There are two ways of event propagation in the HTML DOM: bubbling and capturing.

Event propagation allows for the definition of the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

	> In bubbling, the innermost element's event is handled first and then the outer element's event is handled. The <p> element's click event is handled first, followed by the <div> element's click even
	
	> In capturing, the outermost element's event is handled first and then the inner. The <div> element's click event is handled first, followed by the <p> element's click event.
	
	
	Capturing goes down the DOM.
Bubbling goes up the DOM.
	
	```
	addEventListener(event, function, useCapture)
	
	//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);
	```
---
```
var i=0;
while (i<=10) {
    // document.write(i + "<br />");
    document.write(`${i} </br>`)
    i++;
}
```

* to access a specific element with CSS selectors
* Selectors can include the name of the tag, a class, or an ID
```
document.querySelector('p'); // returns the first element that matches that selector
document.getElementById('bio').innerHTML // to access elements directly by their id
```

* style an element
* element.style.property format, with the property representing a CSS property.
```
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';

document.querySelector('.blue').style.fontFamily = 'Roboto';

document.body.style.backgroundColor= '#201F2E';
```

* Create and Insert Elements
* The .createElement(tagName) method creates a new element based on the specified tag name passed into it as an argument. However, it does not append it to the document. It creates an empty element with no inner HTML.
```

```
* assign it to be the child of an element that already exists on the DOM
* .appendChild() method will add a child element as the last child node.
```
let paragraph = document.createElement('p');
 
paragraph.id = 'info'; 
 
paragraph.innerHTML = 'The text inside the paragraph';
 
document.body.appendChild(paragraph);
```

```
let newDestination = document.createElement('li');

newDestination.id = 'oaxaca';

newDestination.innerHTML = 'Oaxaca, Mexico';

document.getElementById('more-destinations').appendChild(newDestination);
```

* Remove an element
* .removeChild() method removes a specified child from a parent.
```
let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);


```


```
let trip = document.getElementById('oaxaca');
document.getElementById('more-destinations').removeChild(trip);
```

* hide element
```
document.getElementById('sign').hidden = true;
```

* interactivity on click
* The .onclick property allows you to assign a function to run on a click event on an element:
```
let element = document.getElementById('interact');
element.onclick = function() { element.style.backgroundColor = 'blue' };
```

```
let element = document.querySelector("button");

function turnButtonRed (){
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button'
}

element.onclick = turnButtonRed;
```

### Traversing the DOM
A parent node is the closest connected node to another node in the direction towards the root.

A child node is the closest connected node to another node in the direction away from the root.

* Each DOM element node has a .parentNode and .children property. The property will return a list of the element’s children and return null if the element has no children.

* The .firstChild property will grant access to the first child of that parent element.
```
let first = document.body.firstChild;
first.innerHTML = 'I am the child!';

first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!'
```

```

# index.html
<h1 id="myHeading">JavaScript and the DOM</h1>
<script src="js/app.js"></script>

# app.js
const myHeading = document.getElementById('myHeading');
function myheadingColor(){
    myHeading.style.color='red';
}
```

### .getElementById()
* single element
### .addEventListener()

```
    <button id="myButton">Make Heading Red</button>
    
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click',()=>{
        myButton.style.color='red';
    })

```
```
    <input type="text" id="myTextInput"></br></br>
    <button id="myButton">Change Headline Color</button>

    const myHeading = document.getElementById('myHeading');
    const myButton = document.getElementById('myButton');
    const myTextInput = document.getElementById('myTextInput');

    myButton.addEventListener('click',()=>{
        myHeading.style.color=myTextInput.value;
    })
```
### .getElementsByTagName()
* multiple elements
* html collection

```
const els = document.getElementsByTagName('p');

// individually
let el = els[0];

// loop
for(let i=0; i < els.length; i++){
    els[i]
}
```

### .getElementsByClassName()
* multiple elements
* html collection


```
    <ul>
        <li>grapes</li>
        <li class="error-not-purple">oranges</li>
        <li>amethyst</li>
        <li>lavender</li>
        <li class="error-not-purple">fire trucks</li>
        <li class="error-not-purple">snow</li>
        <li>plums</li>
    </ul>
    
    const errorNotPurple = document.getElementsByClassName('error-not-purple');

    for(let i=0; i < errorNotPurple.length; i++){
        errorNotPurple[i].style.color='red';
    }
```

* bootstrap class
```
document.getElementsByClassName('container')


```



### document.querySelector() , document.querySelectorAll()

* tag
* id , # 
* class , .
* etc ,
    * html attributes , <p title="label"></p>
    ```
        <p title="label"></p>
        document.querySelector('[title=label]')
    ```
    * css selector , even | odd
    ```
      <ul>
        <li></li>
        <li></li>
      <ul>
  
    const evens = document.querySelectorAll('li:nth-child(even)');
    for(let i=0; i < evens.length; i++){
      evens[i].style.backgroundColor='baige';
    }
  
    ```

* document.querySelector('')
    * match first matching

* document.querySelectorAll('')
    * html collections
    
  
### Element.textContent, Element.innerHTML

* Element.textContent
  * read
  * set 
  
```
    <p class="description">Things that are purple:</p>
    <input type="text" class="description"></br></br>
    <button class="description">Change Text</button>
    
    const input = document.querySelector('input.description');
    const p = document.querySelector('p.description');
    const button = document.querySelector('button.description');

    button.addEventListener('click',()=>{
    p.textContent = input.value + ": ";
})

```



* Element.innerHTML

```
    <p class="description">Things that are purple:</p>
    <input type="text" class="description"></br></br>
    <button class="description">Change Text</button>
    
    const input = document.querySelector('input.description');
    const p = document.querySelector('p.description');
    const button = document.querySelector('button.description');

    button.addEventListener('click',()=>{
    p.innerHTML = input.value + ": ";
})

```

### Change Element Attributes

HTMLElement.type
HTMLElement.className

```
  const p = document.querySelector('p');
  p.title="description"
```

### Change Element Style


HTMLElement.style.backgroundColor
HTMLElement.style.color

```
    <button id="toggleList">Hide List</button>

    <div class="list">
    </div>
    
    toggleList.addEventListener('click',()=>{
    if(listDiv.style.display=="none"){
        listDiv.style.display="block";
        toggleList.textContent="Hide List";
    } else {
        listDiv.style.display="none";
        toggleList.textContent="Show List";
    }
})
    
```

### Create Element Style

HTML.createElement('htmltag')

```
document.createElement('div')
```

```
<input type="text" class="addItemInput"></br></br>
<button class="addItemButton">Add Item</button>

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

addItemButton.addEventListener('click',()=>{
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
})
```

### Node Append Child
* nodes belong to the DOM

```
Node.appendChild()
```
```
        <ul>
            <li>grapes</li>
            <li class="error-not-purple">oranges</li>
            <li>amethyst</li>
            <li>lavender</li>
            <li class="error-not-purple">fire trucks</li>
            <li class="error-not-purple">snow</li>
            <li>plums</li>
        </ul>
        
<input type="text" class="addItemInput"></br></br>
<button class="addItemButton">Add Item</button>
        
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

addItemButton.addEventListener('click',()=>{
    let li = document.createElement('li');
    li.textContent = addItemInput.value;

    let ul = document.querySelector('ul');
    ul.appendChild(li);
})
```

### Node Remove Child

```
Node.removeChild()
```

```
<button class="removeItemButton">Remove Last Item</button>


const removeItemButton = document.querySelector('button.removeItemButton');

removeItemButton.addEventListener('click',() => {
    let length = document.querySelectorAll('li').length;
    let lastLi = document.querySelectorAll('li')[length-1];
    let ul = document.querySelector('ul');
    ul.removeChild(lastLi);

```

# User Interaction Event 

## Interactive site 
* Selecting elements on the page
* Manipulating elements
* Listening for user actions

### window.setTimeout()

```
window.setTimeout(
    (something)=>{
        console.log(something)
    },3000,'Greeting'
)
```

### EventTarget.addEventListener()

