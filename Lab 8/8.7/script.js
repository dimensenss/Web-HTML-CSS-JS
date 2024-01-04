
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
function sort(){
    let res=document.getElementById("result_arr");
    let up=document.querySelector('input[type=checkbox][name=up]:checked').value;
        if(up=="down"){
        let size=Math.floor(array.length*1/3)
        let q=(array.length/3)*2;
        const b=array.slice(array.length*2/3,array.length);
        function f(a, b) {return (b-a);}
        b.sort(f);
        for(let i=0;i<size;i++,q++){
            array[q]=b[i];
        }
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
    if(up=="up"){
        let size=Math.floor(array.length*1/3)
        let q=(array.length/3)*2;
        const b=array.slice(array.length*2/3,array.length);
        function f(a, b) {return (a-b);}
        b.sort(f);
        for(let i=0;i<size;i++,q++){
            array[q]=b[i];
        }
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
}
function copy(){
    var new_arr = array.slice(1,array.length);
    let arr_copy=document.getElementById("arr_copy");
        let element=array[0];
        new_arr.splice((new_arr.length),0,element);
        let string="Новий масив: ";
        for(let i=0;i<new_arr.length;i++){
            if(i==0){
                string+=new_arr[i];
           }
           else{
               string+=", "+new_arr[i];
           }
        }
        arr_copy.innerHTML=string;
}
function filter_arr(){

    var arr_filter = array.filter((element) => Math.trunc(element)%5==0 || Math.trunc(element)%3==0);
    document.getElementById("arr_filter").innerHTML = arr_filter.join(", ");
}
function statistic(){
   
    const average = array.reduce((total, amount, index, array) => {
      total += amount*amount;
      if( index == array.length-1) { 
        return total/array.length;
      }else { 
        return total;
      }
    });
    document.getElementById("arr_statistic").innerHTML = 'Середнє квадратичне: '+average;
}
function modify(){
    let numCallbackRuns=0;
    let modify_arr=document.getElementById("arr_modify"); 
    let modify_arr2=[];
   array.forEach((element) => {
    element=element*2;
    console.log(element)
    modify_arr2[numCallbackRuns]=element;
    numCallbackRuns++
    })
    let string="Новий масив: ";
        for(let i=0;i<modify_arr2.length;i++){
        string+=", "+modify_arr2[i];
    }
    modify_arr.innerHTML = string;
}