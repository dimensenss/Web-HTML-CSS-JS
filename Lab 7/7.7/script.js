var x=0;
function add(){
    var car=document.getElementById('car').value;
    if(car=='')
    {
        alert("Ваше поле пусте");
    }
    else
    {
        let parent = document.querySelector('#parent')
        let new_li = document.createElement('li');
        new_li.innerHTML=car;
        new_li.addEventListener('click',function(){if(new_li.style.backgroundColor=='orange'){new_li.style.backgroundColor=''}else{new_li.style.backgroundColor='orange'}})
        parent.appendChild(new_li);
        x+=1;
    }
}
function del(){
  let parent = document.querySelector('#parent')
  for(let i=0; i<x; i++)
  {
    if(parent.childNodes[i].style.backgroundColor=='orange'){parent.removeChild(parent.childNodes[i]);}
  }
  
}