
function getUpper(str) {
    return str.split(' ').map(function(word) {
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
  }
function adapt(){
   const text=document.getElementById("input1").value;
   let part2=getUpper(text.substr((text.length)/2));
   let part1=text.substr(0,(text.length)/2);

   document.getElementById("result").innerHTML = part1+part2;
}