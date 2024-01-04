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
