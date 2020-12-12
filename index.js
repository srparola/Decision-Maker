
var randomNumber1 = Math.floor(Math.random() * 2) + 1; //1-6

console.log(randomNumber1);
var randomDiceImage = "coin-" + randomNumber1 + ".jpg"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



// //If player 1 wins
if (randomNumber1 > 1) {
   document.querySelector("h1").innerHTML = "🕊 You Got Tails!";
   document.querySelector("p").textContent="I think you made a decission now";
 }
 else {
   document.querySelector("h1").innerHTML = "😎 You Got Heads!";
   document.querySelector("p").textContent="I think you made a decission now";
 }
