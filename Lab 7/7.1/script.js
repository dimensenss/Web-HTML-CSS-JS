function foo()
{
   var a=document.getElementById("name").value;
   document.getElementById("name0").innerHTML = "Ім'я: "+ a;
   var a1=document.getElementById("phone").value;
   document.getElementById("phone0").innerHTML = 'Телефон: ' + a1;
   var a2=document.getElementById("gmail").value;
   document.getElementById("gmail0").innerHTML = 'Пошта: ' + a2;
   var a3=document.getElementById("day").value;
   document.getElementById("day0").innerHTML = 'День: ' + a3;
   var a4=document.getElementById("age").value;
   document.getElementById("age0").innerHTML = 'Вік: ' + a4;
   var a5=document.getElementById("food").value;
   document.getElementById("ftc0").innerHTML = 'Кухня ' + a5;
   var a6=document.getElementById("wishes").value;
   document.getElementById("wishes0").innerHTML = 'Поради: ' + a6;
   var a7=document.querySelector('input[type=radio][name=quest1]:checked').value;
   document.getElementById("q10").innerHTML = 'quest1: ' + a7;
   var a8= document.querySelector('input[type=radio][name=quest2]:checked').value;
   document.getElementById("q20").innerHTML = 'quest2: ' + a8;
}