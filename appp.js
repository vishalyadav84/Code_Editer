const dropDown =document.querySelector(".dropDown");
const tool=document.querySelector(".tools");
const container=document.querySelector(".container");
const upLogo=document.querySelector("#up");
const downLogo=document.querySelector("#down");
const red=document.querySelector("#red");
const green=document.querySelector("#green");
const blue=document.querySelector("#blue");
const yellow=document.querySelector("#yellow");
const eraerButton=document.querySelector(".eraser")
const customColor=document.querySelector("#colorRange");
const colorBox=document.querySelector(".customColor");

colorBox.addEventListener("click",()=>{
    customColor.click();
})


customColor.addEventListener("input",(e)=>{
        defColor=e.target.value;
        console.log(defColor)
})



red.addEventListener("click",()=>{
    defColor=red.style.color;
        console.log(defColor);
})

green.addEventListener("click",()=>{
    defColor=green.style.color;
        console.log(defColor);
})

blue.addEventListener("click",()=>{
    defColor=blue.style.color;
        console.log(defColor);
})

yellow.addEventListener("click",()=>{
    defColor=yellow.style.color;
        console.log(defColor);
})

eraerButton.addEventListener("click",()=>{
    defColor="#ffffff";
})


let defColor="#000000";



// handling the tools displaying

let dropDownValue=0;
dropDown.addEventListener("click",()=>{
    if(dropDownValue===0)
    {
    tool.style.display="flex";
    container.style.height="15vh";
    console.log("button click");
    dropDownValue=1;
    downLogo.style.display="none";
    upLogo.style.display="block";
    }
    else{
        tool.style.display="none";
    container.style.height="0vh";
    console.log("button click");
    downLogo.style.display="block";
    upLogo.style.display="none";
    dropDownValue=0;
    }
})

// handling the basics of canvas
const canvas=document.querySelector("canvas");
let c=canvas.getContext('2d');
console.log(c);
let isDrawing=false;
let brushWidth=10;


const brush=document.querySelector("#brushSize");
brush.addEventListener("input",(e)=>{
    brushWidth=e.target.value;
    console.log(brushWidth);
})

window.addEventListener("load",()=>{
    canvas.width=canvas.offsetWidth;
    canvas.height=canvas.offsetHeight;
});

const drawing = (e) =>{
    if(!isDrawing) return;
    c.lineTo(e.offsetX,e.offsetY);
    c.stroke();
}

const starDraw = ()=>{
    isDrawing=true;
    c.beginPath();
    c.lineWidth=brushWidth;
    c.strokeStyle=defColor;
}

canvas.addEventListener("mousedown",starDraw);
canvas.addEventListener("mousemove",drawing);
canvas.addEventListener("mouseup",()=>{ isDrawing=false});