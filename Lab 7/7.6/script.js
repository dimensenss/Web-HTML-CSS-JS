function add(){
    var engine=document.getElementById('engine').value;
    var brand=document.getElementById('brand').value;
    var model=document.getElementById('model').value;
    var year=document.getElementById('year').value;
    var capasity=document.getElementById('capasity').value;
    
    if(engine==''||brand==''||model==''||year==''||capasity=='')
    {
        alert("Ви залишили пусте поле");
    }
    else
    {
        let parent = document.querySelector('#parent')
        let new_tr = document.createElement('tr');
        parent.appendChild(new_tr);
        let new_td1=document.createElement('td');
        new_td1.innerHTML=brand;
        let new_td2=document.createElement('td');
        new_td2.innerHTML=model;
        let new_td3=document.createElement('td');
        new_td3.innerHTML=year;
        let new_td4=document.createElement('td');
        new_td4.innerHTML=capasity;
        let new_td5=document.createElement('td');
        new_td5.innerHTML=engine;
        new_tr.appendChild(new_td1);
        new_tr.appendChild(new_td2);
        new_tr.appendChild(new_td3);
        new_tr.appendChild(new_td4);
        new_tr.appendChild(new_td5);
    }
}
function del(){
    let parent = document.querySelector('#parent')
    parent.removeChild(parent.lastChild);
}