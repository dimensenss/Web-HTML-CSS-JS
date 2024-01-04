let arr = [];

function create(){
    for(let i =0; i<5; i++){
        let temp = [];
        for(let j =0; j<5; j++){
            temp.push(Math.round(Math.random()*10));
        }        
        arr.push(temp)
    }
    console.log(arr)
}
create();

function find(){
    let count = [];
    for(let i =0; i<arr.length;i++){
        let c = 0;
        for(let j =0; j < arr[i].length; j++){
            c+=Number(arr[i][j]);
        }
        count.push(c/arr[i].length);
    }
    console.log(count)
}
find();