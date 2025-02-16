var randomNumber1 = Math.ceil(Math.random()*6);

var randomNumber2 = Math.ceil(Math.random()*6);

document.getElementsByClassName("img1")[0].src = "images/dice"+randomNumber1+".png";

document.getElementsByClassName("img2")[0].src = "images/dice"+randomNumber2+".png";

if(randomNumber1 < randomNumber2) {
    document.getElementById("title").innerHTML = "Player 2 Wins!";
} else if(randomNumber1 > randomNumber2) {
    document.getElementById("title").innerHTML = "Player 1 Wins!";
} else if(randomNumber1 === randomNumber2) {
    document.getElementById("title").innerHTML = "Draw!";
}
