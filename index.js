document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){

var randomNumber1 = Math.floor(Math.random() * 6 + 1);// 1 to 6
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png to images/dice6.png
document.querySelectorAll("img")[0].setAttribute('src',randomImageSource1);// to select and change the src 

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute('src',randomImageSource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "⛳ Player 1 wins!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins! ⛳";
}
else
{
    document.querySelector("h1").innerHTML = "draw!!🎊";
}

}