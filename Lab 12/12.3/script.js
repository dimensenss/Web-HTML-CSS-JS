 const maxBlock = document.querySelector('.max');

 function Students() {
    this.name = "student";
    this.first =  fillArr();
    this.second = fillArr();
    this.third= fillArr();
    this.fourth= fillArr();
    this.fifth = fillArr();
}

function fillArr(){
    let arr = [];
    for(let i =0; i<10; i++){
        arr.push(Math.round(Math.random()*40+60));
    }
    return arr;
}


function work(){   
    let studArr = [];

    for(let i =0; i<10; i++){
        let student = new Students;
        studArr.push(student);
    }
    studArr[0].name = 'headman';
   

    for(let i = 0; i<studArr.length; i++){
        const studentBlock = document.createElement('div');
        studentBlock.append(`${studArr[i].name} ${i+1}   `);
        const table = document.createElement('table');
        const newhead = document.createElement('tr');
        newhead.innerHTML = '<th></th> <th>1</th> <th>2</th> <th>3</th> <th>4</th> <th>5</th>'
        table.append(newhead);

            const newRow = document.createElement('tr');
        let newName = document.createElement('td');
        newName.innerText = 'max';
        newRow.append(newName);
        studArr[0].getMax = getMax.bind(studArr[i], newRow);      
        studArr[0].getMax(newRow);
        table.append(newRow);

            const newRowMin = document.createElement('tr');
        newName = document.createElement('td');
        newName.innerText = 'min';
        newRowMin.append(newName);
        studArr[0].getMin = getMin.bind(studArr[i], newRowMin);  
        studArr[0].getMin(newRowMin);
        table.append(newRowMin);

            const newRowAv = document.createElement('tr');
        newName = document.createElement('td');
        newName.innerText = 'aver.';
        newRowAv.append(newName);
        studArr[0].getAv = getAv.bind(studArr[i], newRowAv);  
        studArr[0].getAv(newRowAv);
        table.append(newRowAv);

        studentBlock.append(table);
        maxBlock.append(studentBlock);
    }
    
}
work();

function getMax(newRow){
    for(let key in this){
        if(key=='first'||key == 'fourth'){
        if(key!='name'&& key!='getMax' && key!='getMin' && key!='getAv'){
            const newTd = document.createElement('td');
            newTd.innerText = `${Math.max.apply(null, this[key])} `;
            newRow.append(newTd);
        }} 
        else {
            if(key!='name'&& key!='getMax' && key!='getMin' && key!='getAv'){
            const newTd = document.createElement('td');
            newRow.append(newTd);}
        }
    }    
}
function getMin(newRow){
    for(let key in this){

        if(key=='first'||key == 'fourth'){
        if(key!='name' && key!='getMin' && key!='getMax' && key!='getAv'){
            const newTd = document.createElement('td');
            newTd.innerText = `${Math.min.apply(null, this[key])} `;
            newRow.append(newTd);
        }}
        else {
            if(key!='name'&& key!='getMax' && key!='getMin' && key!='getAv'){
            const newTd = document.createElement('td');
            newRow.append(newTd);}
        }
    }    
}
function getAv(newRow){
    for(let key in this){
        if(key=='first'||key == 'fourth'){
        if(key!='name' && key!='getMin' && key!='getMax' && key!='getAv'){
            const newTd = document.createElement('td');
            let average = this[key].reduce((a,b) => a+b ,0)/this[key].length;
            newTd.innerText = `${average} `;
            newRow.append(newTd);
        }}
        else {
            if(key!='name'&& key!='getMax' && key!='getMin' && key!='getAv'){
            const newTd = document.createElement('td');
            newRow.append(newTd);}
        }
    }  
}