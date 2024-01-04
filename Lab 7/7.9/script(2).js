let a=document.getElementById('a');
a.disabled=true;

let d=document.getElementById('d');
d.disabled=true;

let s=document.getElementById('s');
s.disabled=true;

let text=document.createElement("input");
text.type="text";
text.placeholder="Характеристики";

let table=document.createElement("table");
table.id="table";

a.onclick=()=>{
    let x;
    if(text.value.length!=0)
    {
        x=text.value.split(" ");
        if(x.length<5){
            alert("Більше 5 параметрів");
        }
        else {
            let new_tr=document.createElement("tr");
            for(let i=0;i<x.length;++i){
                let new_td=document.createElement("td");
                new_td.textContent=x[i];
                new_tr.appendChild(new_td);
            }
            table.appendChild(new_tr);
            new_tr.addEventListener("click",function (){if(new_tr.style.backgroundColor=='orange'){new_tr.style.backgroundColor=''}else{new_tr.style.backgroundColor='orange'}d.disabled=false;});

            new_tr.addEventListener("dblclick",function (){
                a.disabled=true;
                d.disabled=true;
                text.value="";
                for(let i=0;i<new_tr.childElementCount;++i){
                    if(i==0){
                        text.value=text.value+new_tr.childNodes[i].textContent;
                    }
                    else {
                        text.value=text.value+" "+new_tr.childNodes[i].textContent;
                    }
                }

                s.disabled=false;
                s.onclick=()=>{
                    re=text.value.split(" ");
                    if(re.length<5){
                        alert("Введіть більше 5 параметрів");
                    }
                    else {
                        for(let i=0;i<new_tr.childElementCount;++i){
                            new_tr.childNodes[i].textContent=re[i];
                        }
                    }
                    a.disabled=false;
                    d.disabled=false;
                    s.disabled=true;
                }
            });
        }
    }
    else {
        alert("У вас пусті поля");
    }
}

d.onclick=()=>{

    let elem = document.getElementById("table").getElementsByTagName('tr');
    let len=elem.length;
    for(let i=len-1;i!=-1;i--){
        let del_el=document.getElementById("table").getElementsByTagName('tr')[i].style.backgroundColor
        if(del_el=="orange"){
            table.removeChild(elem[i]);
        }
    }
    d.disabled=true;
}

let container=document.getElementById("container");

container.appendChild(text);
container.appendChild(table);

text.addEventListener("keyup",function (){
   let re=text.value.split(" ");
    if(text.value.length==0||re.length<5){
        a.disabled=true;
    }
    else {
        a.disabled=false;
    }
});

