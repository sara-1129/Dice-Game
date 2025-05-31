let play = document.querySelector("#play");
play.addEventListener("click",() => {
let dice1Value = Math.floor((Math.random()*6) + 1);
let dice2Value = Math.floor((Math.random()*6) + 1);

let dice1 = "images/dice"+dice1Value+".png";
let dice2 = "images/dice"+dice2Value+".png";


document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if(dice1Value >dice2Value) {
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if (dice1Value < dice2Value) {
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else {
    document.querySelector("h1").innerHTML = "Its a Draw !";
} });

