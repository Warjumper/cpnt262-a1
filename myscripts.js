// Event listener with callback function
// const greet = function() {
//   console.log('Click "GENERAL KENOBI!" - by General Grievous');
// };

// const button = document.querySelector('button');
// button.addEventListener('click', greet);

// Event listener with callback function 2
document.querySelector("button")
  .addEventListener('click', function () {
    console.log('Click "GENERAL KENOBI!" (and lower your volume)')
  });

// Audio on click for button2
function play() {
  let audio = document.getElementById("audio");
    audio.play();
};

// Variables (poor rebellion)
// In this equation, x is the billions of dead, y is the number of planets destroyed (each ranging greatly in life on planet), and z is the guessed total losses.
var x = 30567007860;
var y = 212400560000;
var z = x + y;

document.getElementById("deathstars").innerHTML =
"The amount of losses is approximately (CLICK THIS FOR THE EMPIRE!): " + z;

// Document Modification
// document.getElementById("deathstars").innerHTML = '"This is Rebel Propaganda!"- General Grevious, probably.';
function myFunction() {
  document.getElementById("deathstars").innerHTML = 
  `"This is Rebel Propaganda!"
    - General Grevious, probably.`;
}

// Template Literal
console.log(`'help us Tonywan,

you're our only hope!'`);

