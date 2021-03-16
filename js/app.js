var icos = [document.getElementById('ico-1'), document.getElementById('ico-2'),
document.getElementById('ico-3')]


function dark(){
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.transition = "2s";
    document.body.style.backgroundBlendMode = "multiply";
    icos[0].style.filter = "invert(1)";
    icos[1].style.filter = "invert(1)";
    icos[2].style.filter = "invert(1)";
    document.getElementById("ball-1").style.left="75%";
    document.getElementById("ball-1").style.width="17px";
    document.getElementById("ball-1").style.height="17px";
    document.getElementById("ball-1").style.top="0%";
    document.getElementById("btn-1").style.color="#fff";
    document.getElementById("btn-1").style.backgroundColor="#373737";
    document.getElementById("btn-1").style.transition="0.7s";
    document.getElementById("ball-1").style.transition="1s";
    document.getElementById("header").style.backgroundColor="rgba(104, 104, 104)";

}

function light(){
    document.body.style.backgroundColor = "#fff";
    document.body.style.transition = "2s";
    document.body.style.backgroundBlendMode = "multiply";
    icos[0].style.filter = "none";
    icos[1].style.filter = "none";
    icos[2].style.filter = "none";
    document.getElementById("ball-2").style.left="75%";
    document.getElementById("ball-2").style.width="17px";
    document.getElementById("ball-2").style.height="17px";
    document.getElementById("ball-2").style.top="0%";
    document.getElementById("btn-2").style.color="#373737";
    document.getElementById("btn-2").style.backgroundColor="rgb(255, 255, 255)";
    document.getElementById("btn-2").style.transition="0.7s";
    document.getElementById("ball-2").style.transition="1s";
    document.getElementById("header").style.backgroundColor="#fff";
}