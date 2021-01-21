// const myHeading = document.getElementById('myHeading');
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector('div.list');

toggleList.addEventListener('click',()=>{
    if(listDiv.style.display=="none"){
        listDiv.style.display="block";
        toggleList.textContent="Hide List";
    } else {
        listDiv.style.display="none";
        toggleList.textContent="Show List";
    }
})

// method 1

// function myheadingColor(){
//     myHeading.style.color='red';
// }

// method 2

// myHeading.addEventListener('click',() => {
//     myHeading.style.color='red';
// })

// method 3

myButton.addEventListener('click',()=>{
    myHeading.style.color=myTextInput.value;
})

/*
const list = document.getElementsByTagName('li');


for(let i=0; i < list.length; i++){
    list[i].style.color='purple';
}

 */

/*
const errorNotPurple = document.getElementsByClassName('error-not-purple');

for(let i=0; i < errorNotPurple.length; i++){
    errorNotPurple[i].style.color='red';
}

 */


/*
const errorNotPurpleTwo = document.querySelectorAll(".error-not-purple");

for(let i=0; i < errorNotPurpleTwo.length; i++){
    errorNotPurpleTwo[i].style.color='green';
}

const evens = document.querySelectorAll('li:nth-child(even)');

for(let i=0; i < evens.length; i++){
    evens[i].style.backgroundColor='beige';
}


 */

const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

button.addEventListener('click',()=>{
    p.innerHTML= input.value + ": ";
})

p.title="List Description";

