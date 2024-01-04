function generateColor() {return '#' + Math.floor(Math.random()*16777215).toString(16)}

function rand_size(){return (Math.floor(Math.random()*300)+100) +'px';}

function rand_x(){return (Math.floor(Math.random()*1500))+'px';}

function rand_y(){return Math.floor(Math.random()*700)+'px';}

function rand_style_border(){
  var mas=['solid','dotted','none'];
  return mas[Math.floor(Math.random()*3+0)];
}
  var x=-1;
function add(){
    let parent = document.querySelector('#parent')
    let ndiv = document.createElement('div');
    ndiv.style.backgroundColor=generateColor();
    ndiv.style.borderColor=generateColor();
    ndiv.style.borderWidth='20px';
    ndiv.style.borderStyle=rand_style_border();
    ndiv.style.height=rand_size();
    ndiv.style.width=rand_size();
    ndiv.style.left=rand_x();
    ndiv.style.top=rand_y();
    ndiv.style.position='absolute';
    parent.appendChild(ndiv);
    x+=1;
}
function del(){
  let parent = document.querySelector('#parent')
  parent.removeChild(parent.lastChild);
}