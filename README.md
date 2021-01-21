### Interactive pages with JS

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