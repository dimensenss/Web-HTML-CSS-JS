let rand=Math.floor(Math.random()*20); 

for(let i=0;i<rand;i++){
    const div=document.createElement("div");
    div.style.position="absolute";
    div.style.width="200px";
    div.style.height="200px";
    div.style.top=Math.floor(Math.random()*100)+"%";
    div.style.left=Math.floor(Math.random()*100)+"%";
    div.style.border='4px dashed red';
    document.getElementById('block').appendChild(div);
} 