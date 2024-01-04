function add(){
    var car=document.getElementById('car').value;
    if(car=='')
    {
        alert("Ваше поле пусте");
    }
    else
    {
        let parent = document.querySelector('#parent')
        let new_li = document.createElement('li');
        new_li.innerHTML=car;
        parent.appendChild(new_li);
    }
}
function del(){
  let parent = document.querySelector('#parent')
  parent.removeChild(parent.lastChild);
}