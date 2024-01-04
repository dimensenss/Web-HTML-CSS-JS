document.getElementById('d1').addEventListener('click', function(){document.getElementById('inner').innerHTML+=' 1'})
document.getElementById('d2').addEventListener('click', function(){document.getElementById('inner').innerHTML+=' 2'})
document.getElementById('d3').addEventListener('click', function(){document.getElementById('inner').innerHTML+=' 3'})
document.getElementById('d4').addEventListener('click', function(){document.getElementById('inner').innerHTML+=' 4'})
document.getElementById('d5').addEventListener('click', function(){document.getElementById('inner').innerHTML+=' 5'})

var rb = document.getElementsByName("rb");
rb[0].addEventListener("click", function(){document.getElementById("btn1").style.display = "block";
document.getElementById("btn2").style.display = "none";
document.getElementById("btn3").style.display = "none";})

rb[1].addEventListener("click", function(){document.getElementById("btn1").style.display = "none";
document.getElementById("btn2").style.display = "block";
document.getElementById("btn3").style.display = "none";})

rb[2].addEventListener("click", function(){document.getElementById("btn1").style.display = "none";
document.getElementById("btn2").style.display = "none";
document.getElementById("btn3").style.display = "block";})

var buttonEl = document.getElementById("btn1");
buttonEl.addEventListener("click", function(){var value =+ document.getElementById("number").value;
document.getElementById("number").value = value + 2;})

buttonEl = document.getElementById("btn2");
buttonEl.addEventListener("click", function(){var value =+ document.getElementById("number").value;
document.getElementById("number").value = value - 2;})

buttonEl = document.getElementById("btn3");
buttonEl.addEventListener("click", function(){var value =+ document.getElementById("number").value;
document.getElementById("number").value = Math.sqrt(value);})

