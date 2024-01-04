var date = new Date();

function show_date()
{document.getElementById("date").innerHTML = (date.getUTCMonth()+1) + "." + date.getUTCDate() + "." + date.getUTCFullYear();}