var n = Math.random();
n=n*6;
n=Math.floor(n)+1;
var a = "dice"+ n + ".png";
var b = "images/"+a;
var image1 = document.querySelector(".img1");
image1.setAttribute("src",b);
var n1 = Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;
var a1 = "dice"+ n1 + ".png";
var b1 = "images/"+a1;
var image2 = document.querySelector(".img2");
image2.setAttribute("src",b1);
if(n>n1){
    document.querySelector("h1").innerHTML="Player 1 win";
}
else if(n===n1){
    document.querySelector("h1").innerHTML="Its a tie";
}
else{
    document.querySelector("h1").innerHTML="Player 2 win";
}