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
{document.getElementById('time').innerHTML =time.getHours()+":" + time.getMinutes() + ":" + time.getSeconds();}