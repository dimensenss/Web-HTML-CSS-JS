var date = new Date();

function show_date()
{document.getElementById("date").innerHTML =(date.getUTCMonth()+1) + "." + date.getUTCDate() + "." + date.getUTCFullYear();}

function show_new_date(){

    var fullDate = document.getElementById("choose_date").value.split('-');  

    date.setMonth(parseInt(fullDate[1],10))
    date.setDate(parseInt(fullDate[2],10))
    date.setFullYear(parseInt(fullDate[0],10))

    document.getElementById("date").innerHTML = date.getMonth() +"." + date.getDate() +  "." + date.getFullYear();
}

var date = new Date();