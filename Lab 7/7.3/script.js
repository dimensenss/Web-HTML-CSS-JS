function S(){

    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var h=document.getElementById("h").value;
    if(2*(a*h+a*b+b*h)>0)
    document.getElementById("resS").innerHTML ='Square = '+ 2*(a*h+a*b+b*h);
    else
    document.getElementById("resS").innerHTML = 'Перевірте параметри';
}
function V(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var h=document.getElementById("h").value;
    if((a*b*h)>0)
    document.getElementById("resV").innerHTML ='Volume = '+ (a*b*h);
    else
    document.getElementById("resV").innerHTML = 'еревірте параметри';
}