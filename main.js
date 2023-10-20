canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
imagenfondo="mars.jpg";
altorover=100;
anchorover=90;
imagenrover="rover.png";
roverx=10;
rovery=10;

function add(){
    etiquetafondo=new Image();
    etiquetafondo.onload=uploadbackground;
    etiquetafondo.src=imagenfondo;

    etiquetarover=new Image();
    etiquetarover.onload=uploadrover;
    etiquetarover.src=imagenrover
}
function uploadbackground(){
    ctx.drawImage(etiquetafondo,0,0, canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(etiquetarover,roverx,rovery,anchorover,altorover)
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode; 

    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up")
    }
    if(keyPressed=="40"){
        down();
        console.log("dowm")
    }
    if(keyPressed=="37"){
        left();
        console.log("left")
    }
    if(keyPressed=="39"){
        right();
        console.log("right")
    }
}

function up (){
    if(rovery>=0){
        rovery=rovery-10;
        uploadbackground();
        uploadrover()
    }
}
function down (){
    if(rovery<=500){
        rovery=rovery+10;
        uploadbackground();
        uploadrover()
    }
}
function left (){
    if(roverx>=0){
        roverx=roverx-10;
        uploadbackground();
        uploadrover()
    }
}
function right (){
    if(roverx<=700){
        roverx=roverx+10;
        uploadbackground();
        uploadrover()
    }
}