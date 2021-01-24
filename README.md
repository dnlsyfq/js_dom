### Interactive pages with JS
https://caniuse.com/
https://developer.mozilla.org/en-US/docs/Web/API/Document

1. Select element on page
2. Manipulating elements
3. Listening for actions 

### Browser Global Environment
* window object , global scope
* Window Properties

window.alert('txt')
window.location.href
window.document.<...>

### Document

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

