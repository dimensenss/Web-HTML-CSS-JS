
var array=[];
max = 40;
min= -30;
function create(){
   
   var start = new Date().getTime();
   array=[];
   var size = 10000;
 
   for (let i = 0; i < size; i++) {
       var float = Math.floor(Math.random() *100) * 0.001;
       var int = Math.floor(Math.random() * (max - min)) + min;
       var full = int + float;
       array[i] = full;
   }
   var end = new Date().getTime();
   
   document.getElementById("result_arr").innerHTML =(end - start) + " мс";
}
function sort(){
    var start = new Date().getTime();
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
           //string+=", "+array[i];
       }
    }
    }
    var end2=new Date().getTime();
    res.innerHTML=(end2 - start) + " мс";
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
    var end=new Date().getTime();
    res.innerHTML=(end - start) + " мс";
    }
}
function filter_arr(){
    var start=new Date().getTime();
    var arr_filter = array.filter((element) => Math.trunc(element)%5==0 || Math.trunc(element)%3==0);
    var end = new Date().getTime();
    document.getElementById("arr_filter").innerHTML = (end - start) + " мс";
}
function statistic(){
    var start = new Date().getTime();
    const average = array.reduce((total, amount, index, array) => {
      total += amount*amount;
      if( index == array.length-1) { 
        return total/array.length;
      }else { 
        return total;
      }
    });
    var end = new Date().getTime();
    document.getElementById("arr_statistic").innerHTML = (end - start) + " мс";
}
function modify(){
    var start = new Date().getTime();
    let numCallbackRuns=0;
    let modify_arr=document.getElementById("arr_modify"); 
    let modify_arr2=[];
   array.forEach((element) => {
    element=element*2;
    console.log(element)
    modify_arr2[numCallbackRuns]=element;
    numCallbackRuns++
    })
    let string="Mod arr: ";
        for(let i=0;i<modify_arr2.length;i++){
        string+=", "+modify_arr2[i];
    }
    var end = new Date().getTime();

    modify_arr.innerHTML = (end - start) + " мс";
}
function checkEl(element){
    element = Math.floor(element);
    if(element< 20){return true;}
    else{return false;}
}
function check(){
    var start = new Date().getTime();
    array.every(checkEl);
    array.some(checkEl);
    var end = new Date().getTime();
    document.getElementById("arr_check").innerHTML =(end - start) + " мс";
}
function findEl(element){
    element = Math.floor(element);
    if(-10<element&&element<10){
        return true;
    }
    else{
        return false;
    }
}
function find(){
    var start = new Date().getTime();
    array.find(findEl);
    var end = new Date().getTime();
    document.getElementById("arr_find").innerHTML = (end - start) + " мс";
}