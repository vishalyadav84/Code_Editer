const main = document.querySelector("main");
const buttonApp=document.querySelectorAll(".app");
const noteApp=document.querySelector(".note");
const musicApp=document.querySelector(".music");
const codeApp=document.querySelector(".codee");
const navControl=document.querySelectorAll(".navControl");
const footer=document.querySelector(".footer");
const bMain=document.querySelector(".bMain");
const headButton =document.querySelectorAll(".headButton");
const codeFotter=document.querySelector(".bFooter");
console.log(headButton);
// for controll all the window

buttonApp.forEach(element => {
    element.addEventListener("click",()=>
    {
        if(element.id==="n1")
        {   
            noteApp.style.display="flex";
            noteApp.style.flexDirection= "column";
            noteApp.style.alignItems= "center";
            musicApp.style.display="none";
            codeApp.style.display="none";
        }
        if(element.id==="n2")
        {   
            noteApp.style.display="none";
            musicApp.style.display="block";
            codeApp.style.display="none";
        }
        if(element.id==="n3")
        {   
            noteApp.style.display="none";
            musicApp.style.display="none";
            codeApp.style.display="block";
        }
    })
});
let fullscreenNote=0;
let fullscreenMusic=0;
let fullscreenCode=0;
navControl.forEach(element => {
    
    element.childNodes.forEach(element =>{
     element.addEventListener("click",()=>
     {
        let hid=element.id;
        console.log(hid);
         if(hid==="fullscreenNote")
         {   if (fullscreenNote==0) 
             {
             document.querySelector(".commonApp").style.height="100vh";
             document.querySelector(".commonApp").style.width="100vw";
             footer.style.display="none";
             canvas.width=canvas.offsetWidth;
             canvas.height=canvas.offsetHeight;
             fullscreenNote=1;
             
             }

             else
             {
                 document.querySelector(".commonApp").style.height="70vh";
                 document.querySelector(".commonApp").style.width="60vw";
                 footer.style.display="flex";
                 canvas.width=canvas.offsetWidth;
                 canvas.height=canvas.offsetHeight;
                 fullscreenNote=0;
             }   
         }
         else if (hid==="closeNote") {
             document.querySelector(".commonApp").style.display="none";
             footer.style.display="flex";
         }

        //  Music

         else if(hid==="fullscreenMusic")
            {   if (fullscreenMusic==0) 
                {
                let height=document.querySelector(".commonAppM");
                height.style.height="100vh";
                
                document.querySelector(".commonAppM").style.width="100vw";
                footer.style.display="none";
                console.log("FullScreen Click");
                fullscreenMusic=1;
                }
   
                else
                {
                    document.querySelector(".commonAppM").style.height="70vh";
                    document.querySelector(".commonAppM").style.width="60vw";
                    footer.style.display="flex";
                    console.log("FullScreen Click");
                    fullscreenMusic=0;
                }   
            }
        else if (hid==="closeMusic") {
                document.querySelector(".commonAppM").style.display="none";
                footer.style.display="flex";
                console.log("Hello")
                audio.pause();
            }


            // for coding app
            else if(hid==="fullscreenCode")
                {   if (fullscreenCode==0) 
                    {
                    document.querySelector(".commonAppC").style.height="100vh";
                    document.querySelector(".commonAppC").style.width="100vw";
                    footer.style.display="none";
                    console.log("FullScreenCode Click");
                    bMain.style.height="50vh";
                    headButton.forEach(element => {
                        element.style.height="50px";
                        element.style.width="90px";
                        element.style.gap="10px";
                        element.style.fontSize="15px";
                    });
                    codeFotter.style.height="40.2vh";
                    fullscreenCode=1;
                    }
       
                    else
                    {
                        document.querySelector(".commonAppC").style.height="70vh";
                        document.querySelector(".commonAppC").style.width="60vw";
                        footer.style.display="flex";
                        console.log("FullScreenCode Click");
                        bMain.style.height="40vh";
                        headButton.forEach(element => {
                            element.style.height="40px";
                            element.style.width="56px";
                            element.style.gap="2px";
                            element.style.fontSize="12px";
                        });
                        codeFotter.style.height="11rem";
                        fullscreenCode=0;
                    }   
                }
            else if (hid==="closeCode") {
                    document.querySelector(".commonAppC").style.display="none";
                    footer.style.display="flex";
                    console.log("Hello")
                }
     })
    })
 });




// Drawing app Code

const dropDown =document.querySelector(".dropDown");
const tool=document.querySelector(".tools");
const container=document.querySelector(".containerApp1");
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
    container.style.height="15%";
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
const app1=document.querySelector("#n1");
app1.addEventListener("click",()=>{
    canvas.width=canvas.offsetWidth;
    canvas.height=canvas.offsetHeight;
    console.log(canvas.height)
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


// code app code

const inputHtml=document.querySelector("#html");
const inputCss=document.querySelector("#csss");
const inputJs=document.querySelector("#jss");
const output=document.querySelector(".output");
let jsCode=inputJs.value;
inputHtml.addEventListener("input",
    ()=>{
        output.contentDocument.body.innerHTML=inputHtml.value+"<style>"+inputCss.value+"</style>";
        output.contentWindow.eval(inputJs.value);
});

inputCss.addEventListener("input",
    ()=>{
        output.contentDocument.body.innerHTML=inputHtml.value+"<style>"+inputCss.value+"</style>";
        output.contentWindow.eval(inputJs.value);
});

inputJs.addEventListener("input",
    ()=>{
        output.contentDocument.body.innerHTML=inputHtml.value+"<style>"+inputCss.value+"</style>";
        output.contentWindow.eval(inputJs.value);
});


// musicAPP

const button=document.querySelector(".openButton");
const file=document.querySelector(".file");
const audio=document.querySelector("audio");
const buttonPlay=document.querySelector(".play");
const buttonPrev=document.querySelector(".prev");
const buttonNext=document.querySelector(".next");
const input=document.querySelector(".slider");
const audioTime=document.querySelector(".audioTime");
let audioPlay=0;
button.addEventListener("click",()=>{
    file.click();
})

file.addEventListener("change",(obj)=>{
    let file=(obj.target.files);
    let link=URL.createObjectURL(file[0]);
    audio.src=link;
})

buttonPlay.addEventListener("click",()=>{
    if(audioPlay===0)
    {
        audio.play();
        audioPlay=1;
    }
    else
    {
        audio.pause();
        audioPlay=0;
    }
})

audio.addEventListener("loadedmetadata",(e)=>{
    console.log(e);
    let sec=0;
    let min=0;
    for (let i = 1; i <=e.target.duration ; i++) {
        sec++;
        if(sec===60)
        {
            sec=0;
            min++;
        }
        
    }
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    audioTime.innerHTML=min+":"+sec;
})

buttonNext.addEventListener("click",()=>{
    audio.currentTime=audio.currentTime+5;
})

buttonPrev.addEventListener("click",()=>{
    audio.currentTime=audio.currentTime-5;
})