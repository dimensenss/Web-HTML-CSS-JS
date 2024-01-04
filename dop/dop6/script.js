let slides=document.querySelectorAll('.slide');
let container_of_slides=[];
for(let i=0;i<slides.length;i++)
{
    container_of_slides[i]=slides[i].src;
    slides[i].remove();
}
let q=0;
let j=0;
function step()
{
    let img=document.createElement('img');
    img.src=container_of_slides[q];
    img.classList.add('slide');
    img.style.left=j*300+'px';
    document.querySelector('#slider').appendChild(img);
    
    if(q+1==container_of_slides.length)
      {q=0;}
    else
      {q++;}
    j=1;
}
function step2()
{
    let img=document.createElement('img');
    img.src=container_of_slides[q];
    img.classList.add('slide');
    img.style.right=j*300+'px';
    document.querySelector('#slider').appendChild(img);
    
    if(q+1==container_of_slides.length)
      {q=0;}
    else
      {q++;}
    j=1;
}

function left(){ 
    document.onclick=null;
    let slides2=document.querySelectorAll('.slide');
    let offset2=0;
    for(let i=0;i<slides2.length;i++){
        slides2[i].style.left=offset2+'px';
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove();
        step();
       document.onclick=left;
    },800)
} 
function right(){ 
  document.onclick=null;
  let slides2=document.querySelectorAll('.slide');
  let offset2=0;
  for(let i=0;i<slides2.length;i++){
      slides2[i].style.left=offset2+300+'px';
      offset2--;
  }
  setTimeout(function(){
      slides2[0].remove();
      step2();
     document.onclick=right;
  },800)
} 
let change_1=document.getElementById("change"); 
if(change_1.checked){ 
  step2(); 
  step2(); 
  step2(); 
  step2(); 
}else{ 
  step(); 
  step(); 
  step(); 
  step();  
} 
let btn_action=document.getElementById("btn_action");
let count=0;
btn_action.onclick=()=>{
if(count%2==0)
  {if(change_1.checked){ 
    slideInterval = setInterval(right,1000); 
    }else{ 
        slideInterval = setInterval(left,1000); 
    } 
  }
else
  {clearInterval(slideInterval);}
count++;
}
