
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
function add(){
    let res=document.getElementById("result_arr");
    let element=parseFloat(document.getElementById("input_add").value);
    array.splice((array.length/2),0,element);
    let string="";
    for(let i=0;i<array.length;i++){
        if(i==0){
             string+=array[i];
        }
        else{
            string+=", "+array[i];
        }
        console.log(array[i]);
    }
    res.innerHTML=string;
}
function change(){
    let res=document.getElementById("result_arr");
    let element=parseInt(document.getElementById("input_change").value);
    array.splice((array.length/2),1,element);

   let string="";
    for(let i=0;i<array.length;i++){
        if(i==0){
            string+=array[i];
       }
       else{
           string+=", "+array[i];
       }
    }
    res.innerHTML=string;
}
function del(){
    var i = parseInt(document.getElementById('input_del').value);
    array.splice(i,1);

    document.getElementById("result_arr").innerHTML = array.join(', ');
}