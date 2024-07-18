const notec=document.querySelector(".notes-cont");
const createBtn =document.querySelector(".btn");
let notes=document.querySelectorAll(".inpbox");


function showNotes(){
    notec.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notec.innerHTML);
}

function creation(){
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="inpbox";
    inputBox.setAttribute("contenteditable", "true");
    img.src="images/delete.png";
    notec.appendChild(inputBox).appendChild(img);
}
notec.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".inpbox");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
