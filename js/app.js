// const myHeading = document.getElementById('myHeading');
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

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

const list = document.getElementsByTagName('li');


for(let i=0; i < list.length; i++){
    list[i].style.color='purple';
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for(let i=0; i < errorNotPurple.length; i++){
    errorNotPurple[i].style.color='red';
}

