let a=document.getElementById('a');
a.disabled=true;


let d=document.getElementById('d');
d.disabled=true;

let text=document.getElementById('car');

let list=document.createElement("ul");
list.id="list";

a.onclick=()=>{
    let new_li=document.createElement("li");
    if(text.value.length!=0){
        new_li.textContent=text.value;
        list.appendChild(new_li);
        new_li.addEventListener("click",function (){if(new_li.style.backgroundColor=='orange'){new_li.style.backgroundColor=''}else{new_li.style.backgroundColor='orange'}d.disabled=false;});
    }
    else {alert("You need to enter smth to add");}
}
d.onclick=()=>{
    let elems = document.getElementById("list").getElementsByTagName('li');
    let len=elems.length;
    for(let i=len-1;i!=-1;i--){
        let del_el=document.getElementById("list").getElementsByTagName('li')[i].style.backgroundColor
        if(del_el=="orange"){list.removeChild(elems[i]);}
    }
    d.disabled=true;
}

let x=document.getElementById("container");
x.appendChild(list);

text.addEventListener("keyup",function (){
    if(text.value.length==0){
        a.disabled=true;
    }
    else {
    a.disabled=false;
    }
});

