 const maxBlock = document.querySelector('.max');

 function Students() {
    this.name = "~headman ";
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
    studArr[0].name = '~student(starosta) ';   

    for(let i = 0; i<studArr.length; i++){
        const studentBlock = document.createElement('div');
        studentBlock.append(`${studArr[i].name}${i}   `);
        const table = document.createElement('table');
        const newhead = document.createElement('tr');
        newhead.innerHTML = '<th></th> <th>1</th> <th>2</th> <th>3</th> <th>4</th> <th>5</th>'
        table.append(newhead);

            const newRow = document.createElement('tr');
        let newName = document.createElement('td');
        newName.innerText = 'max';
        newRow.append(newName);
        studArr[0].getMax = getMax.bind(studArr[i]);
        let c = 1;
        for(let i of studArr[0].getMax()){
            if(c==1||c==4){
                const newTd = document.createElement('td');
                            newTd.innerText = i;
                            newRow.append(newTd);
            }
            else if(c>1 && c<4 || c==5){
            const newTd = document.createElement('td');
            newTd.innerText = i;
            newTd.innerText = '';
            newRow.append(newTd);}
            
            c++;
        }        
        table.append(newRow);

            const newRowMin = document.createElement('tr');
        newName = document.createElement('td');
        newName.innerText = 'min';
        newRowMin.append(newName);
        studArr[0].getMin = getMin.bind(studArr[i]);
        c = 1;
        for(let i of studArr[0].getMin()){
             if(c==1||c==4){
            const newTd = document.createElement('td');
            newTd.innerText = i;
            newRowMin.append(newTd);}
            else if(c>1 && c<4 || c==5){
                const newTd = document.createElement('td');
            newTd.innerText = i;
            newTd.innerText = '';
            newRowMin.append(newTd);
            }
              c++;
        } 
        table.append(newRowMin);

            const newRowAv = document.createElement('tr');
        newName = document.createElement('td');
        newName.innerText = 'aver.';
        newRowAv.append(newName);
        studArr[0].getAv = getAv.bind(studArr[i]);
        c = 1;
        for(let i of studArr[0].getAv()){
            if(c==1||c==4){
            const newTd = document.createElement('td');
            newTd.innerText = i;
            newRowAv.append(newTd);}
            else if(c>1 && c<4 || c==5){
                const newTd = document.createElement('td');
            newTd.innerText = i;
            newTd.innerText = '';
            newRowAv.append(newTd);
            }
              c++;
        } 
        table.append(newRowAv);

        studentBlock.append(table);
        maxBlock.append(studentBlock);
    }
    
}
work();

function* getMax(){
    for(let key in this){

        if(key!='name'&& key!='getMax' && key!='getMin' && key!='getAv'){
            yield Math.max.apply(null, this[key]);
        }
    }
}
function* getMin(){
    for(let key in this){
        if(key!='name' && key!='getMin' && key!='getMax' && key!='getAv'){
            yield Math.min.apply(null, this[key]);
        }
    }    
}
function* getAv(){
    for(let key in this){
        if(key!='name' && key!='getMin' && key!='getMax' && key!='getAv'){
            let average = this[key].reduce((a,b) => a+b ,0)/this[key].length;
            yield average
        }
    }  
}