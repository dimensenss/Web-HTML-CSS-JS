
var array=[];
max = 40;
min= -30;

function create(){
   
   array=[];
   var size = Math.floor(Math.trunc(Math.random()*(40 - 20) +20));
 
   for (let i = 0; i < size; i++) {
       var float = Math.floor(Math.random() *100) * 0.001;
       var int = Math.floor(Math.random() * (max - min)) + min;
       var full = int + float;
       array[i] = full;
   }

   document.getElementById("result_arr").innerHTML = array.join(', ');
}