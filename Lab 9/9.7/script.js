var timer;
q=0;
q1=0;
function change_border(){
    var b1=document.getElementById('bl1');
    var b2=document.getElementById('bl2');
    var b3=document.getElementById('bl3');
    var b4=document.getElementById('bl4');
    var mas=['bl1','bl2','bl3','bl4'];
    if(q1==0)
        {   q1=1; 
            b2.style.borderColor='white';
            b3.style.borderColor='white';
            b4.style.borderColor='white';
            return mas[0];
        }
    if(q1==1)
    {   q1=2; 
        b1.style.borderColor='white';
        b3.style.borderColor='white';
        b4.style.borderColor='white';
        return mas[1];
    }
    if(q1==2)
    {   q1=3; 
        b1.style.borderColor='white';
        b2.style.borderColor='white';
        b4.style.borderColor='white';
        return mas[2];
    }
    if(q1==3)
    {   q1=0; 
        b2.style.borderColor='white';
        b3.style.borderColor='white';
        b1.style.borderColor='white';
        return mas[3];
    }

}
function action(){
    if(q==0)
    {
        timer=setInterval(function(){document.getElementById(change_border()).style.borderColor='purple'}, 1000);
        //timer=setTimeout(function(){document.getElementById(change_border()).style.borderColor='red'}, 1000);
        q=1;
        return;
    }
    else
    {
        clearInterval(timer);
        //clearTimeout(timer);
        q=0;
        return;
    }
    
}