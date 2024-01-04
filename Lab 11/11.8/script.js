var date = new Date();

function show_date()
{document.getElementById("date").innerHTML =(date.getUTCMonth()+1) + "." + date.getUTCDate() + "." + date.getUTCFullYear();}

function show_new_date(){

    var new_date = document.getElementById("choose_date").value.split('-');  
    date.setMonth(parseInt(new_date[1],10))
    date.setDate(parseInt(new_date[2],10))
    date.setFullYear(parseInt(new_date[0],10))
    document.getElementById("date").innerHTML = date.getMonth() +"." + date.getDate() +  "." + date.getFullYear();
}
var date = new Date();

var time = new Date();
function show_time()
{document.getElementById('time').innerHTML = time.getHours()+":" + time.getMinutes() + ":" + time.getSeconds();}

function show_new_time(){
    var new_time = document.getElementById("choose_time").value.split(":");
    for(var i = 0; i < 3; i++)
    {
        if(isNaN(new_time[i]))
        {new_time[i] = 0;}
    }
    time.setHours(new_time[0]);
    time.setMinutes(new_time[1]);
    time.setSeconds(new_time[2]);

    document.getElementById("time").innerHTML = time.getHours() + ':' + time.getMinutes() + ":" + time.getSeconds();
}

var day = new Date();
function body_change(){
    var body = document.getElementById('body');
    body.className = `day${day.getDay()}`;
}

var season_now = new Date();
function change_logo(){
    var season = season_now.getMonth();
    if(season >= 0 && season < 3){document.getElementById("logo").style.rotate='0deg';}    
    if(season >= 3 && season < 6){document.getElementById("logo").style.rotate='30deg';}  
    if(season >= 6 && season < 9){document.getElementById("logo").style.rotate='60deg';}  
    if(season >= 9 || season < 12){document.getElementById("logo").style.rotate='90deg';}
}

function show_mod_date(){
    var date = document.getElementById("enter_date").value.split(".");

    var day =+ date[0];
    var month =+ date[1];
    var year =+ date[2];
    day+= 1;
    month-= 1;
  
    if(day < 1 || day > 31)
    {document.getElementById("mod_date").innerHTML = "Ви ввели невірну дату"; return;}
    if(month < 1 || month > 11)
    {document.getElementById("mod_date").innerHTML = "Ви ввели невірну дату"; return;}
    if(year < 0)
    {document.getElementById("mod_date").innerHTML = "Ви ввели невірну дату"; return;}

    document.getElementById("mod_date").innerHTML = day + "." + month + "." + year;
}
