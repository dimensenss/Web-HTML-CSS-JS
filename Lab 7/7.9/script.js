let a=document.getElementById('a');
a.disabled=true;


let d=document.getElementById('d');
d.disabled=true;

let s=document.getElementById('s');
s.disabled=true;

let text=document.getElementById('car');

let list=document.createElement("ul");
list.id="list";
var i='';
a.onclick=()=>{
    let new_li=document.createElement("li");
    if(text.value.length!=0){
        new_li.textContent=text.value;
        list.appendChild(new_li);
        new_li.addEventListener("click",function (){if(new_li.style.backgroundColor=='orange'){new_li.style.backgroundColor=''}else{new_li.style.backgroundColor='orange'}d.disabled=false;});
        new_li.addEventListener("dblclick",function (){text.value=new_li.textContent;
            s.disabled=false;
            a.disabled=true;
            d.disabled=true;
            s.onclick=()=>{
                new_li.textContent=text.value;
                a.disabled=false;
                d.disabled=false;
                s.disabled=true;
            }
        });
    }
    else {alert("У вас пусте поле");}
}
s.onclick=()=>{
    let elems = document.getElementById("list").getElementsByTagName('li');
    let len=elems.length;
    for(let i=0;i<elems.childNodes.length-1;i++){
        if(elems.childNodes[i].textContent==i)
        {
            elems.childNodes[i].textContent=text.value;
        }
    }
    
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

