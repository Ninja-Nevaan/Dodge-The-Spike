ball=document.getElementById("ball");
spike=document.getElementById("spike");
ball.style.top="0";
setInterval(function(){
    ball.style.top= parseInt(ball.style.top) + 10 + 'px';
}, 1000)