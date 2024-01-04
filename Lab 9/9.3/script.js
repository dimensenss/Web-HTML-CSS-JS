
  function search() {
    var input = document.getElementById('input3').value
    input = input.replace("<", "");
    input = input.replace(">", "");
    var text = document.getElementById('text');
    text.style.color='#eda4a4';
    var result = text.innerHTML.replace(new RegExp(input,'g'), "<div style='color:black; display:inline;'>" + input + "</div>");
    document.getElementById('text').innerHTML = result;
  }