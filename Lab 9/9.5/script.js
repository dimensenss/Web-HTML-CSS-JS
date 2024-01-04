
var timer;
var q=0;
function change_font_style(){
    var mas=['italic','normal']
    if(q==0)
        { q=1; return mas[0];}
    else
        { q=0; return mas[1];}
}
function mouse_over(){   
    var text=document.getElementById('text');
    //timer = setTimeout(function(){text.style.fontStyle=change_font_style()}, 1000);
    timer = setInterval(function(){text.style.fontStyle=change_font_style()}, 1000);
}
function mouse_out(){
    var text=document.getElementById('text');
    //clearTimeout(timer);
    clearInterval(timer);

}