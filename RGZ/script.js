let filter_btn=document.getElementById("filter_btn");
let stat_btn=document.getElementById("stat_btn");
let modify_btn=document.getElementById("modify_btn");
let check_btn1=document.getElementById("check_btn1");
let search_btn=document.getElementById("search_btn");
let sort_btn=document.getElementById("sort_btn");
let text=document.getElementById("res");
let text2=document.getElementById("res2");
let text3=document.getElementById("res3");
let create_btn=document.getElementById("create_btn");

let mas;
let mas2;

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JS', 'Arr'],
        datasets: [{
            label: 'speed',
            data: [0,0],
            backgroundColor: [
                'rgba(124, 54, 43, 0.8)',
                'rgba(74, 204, 16, 0.8)'
            ],
            borderColor: [
                'rgb(124, 54, 43)',
                'rgb(74, 204, 16)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'time',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 75
                }
            }]
        }
    }
});
function addData(chart, label, data) {
    chart.data.labels = label
    chart.data.datasets.forEach((dataset) => {
        dataset.data = data;
    });
    chart.update();
}

function create_mas1(){
    let len=100;
    mas=new Array(len);
    for (let i = 0; i < len; i++) {
        var float = Math.floor(Math.random() *100) * 0.001;
        var int = Math.floor(Math.random() * (400 - (-300))) + (-300);
        var full = int + float;
        mas[i] = full;
    }
    text.innerHTML=mas;
    mas2=mas;
}
function create_mas2(){
    let len=200;
    mas=new Array(len);
    for (let i = 0; i < len; i++) {
        var float = Math.floor(Math.random() *100) * 0.001;
        var int = Math.floor(Math.random() * (400 - (-300))) + (-300);
        var full = int + float;
        mas[i] = full;
    }
    text.innerHTML=mas;
    mas2=mas;
}
function create_mas3(){
    let len=500;
    mas=new Array(len);
    for (let i = 0; i < len; i++) {
        var float = Math.floor(Math.random() *100) * 0.001;
        var int = Math.floor(Math.random() * (400 - (-300))) + (-300);
        var full = int + float;
        mas[i] = full;
    }
    text.innerHTML=mas;
    mas2=mas;
}
function create_mas4(){
    let len=1000;
    mas=new Array(len);
    for (let i = 0; i < len; i++) {
        var float = Math.floor(Math.random() *100) * 0.001;
        var int = Math.floor(Math.random() * (400 - (-300))) + (-300);
        var full = int + float;
        mas[i] = full;
    }
    text.innerHTML=mas;
    mas2=mas;
}
function create_mas5(){
    let len=5000;
    mas=new Array(len);
    for (let i = 0; i < len; i++) {
        var float = Math.floor(Math.random() *100) * 0.001;
        var int = Math.floor(Math.random() * (400 - (-300))) + (-300);
        var full = int + float;
        mas[i] = full;
    }
    text.innerHTML=mas;
    mas2=mas;
}
function create_mas6(){
    let len=10000;
    mas=new Array(len);
    for (let i = 0; i < len; i++) {
        var float = Math.floor(Math.random() *100) * 0.001;
        var int = Math.floor(Math.random() * (400 - (-300))) + (-300);
        var full = int + float;
        mas[i] = full;
    }
    text.innerHTML=mas;
    mas2=mas;
}
function create_mas7(){
    let len=25000;
    mas=new Array(len);
    for (let i = 0; i < len; i++) {
        var float = Math.floor(Math.random() *100) * 0.001;
        var int = Math.floor(Math.random() * (400 - (-300))) + (-300);
        var full = int + float;
        mas[i] = full;
    }
    text.innerHTML=mas;
    mas2=mas;
}
function create_mas8(){
    let len=50000;
    mas=new Array(len);
    for (let i = 0; i < len; i++) {
        var float = Math.floor(Math.random() *100) * 0.001;
        var int = Math.floor(Math.random() * (400 - (-300))) + (-300);
        var full = int + float;
        mas[i] = full;
    }
    text.innerHTML=mas;
    mas2=mas;
}
function create_mas9(){
    let len=100000;
    mas=new Array(len);
    for (let i = 0; i < len; i++) {
        var float = Math.floor(Math.random() *100) * 0.001;
        var int = Math.floor(Math.random() * (400 - (-300))) + (-300);
        var full = int + float;
        mas[i] = full;
    }
    text.innerHTML=mas;
    mas2=mas;
}
const select_size=document.querySelector(".select_size");
create_btn.onclick=()=>{
    if(select_size.value=="arr100"){create_mas1();}
    if(select_size.value=="arr200"){create_mas2();}
    if(select_size.value=="arr500"){create_mas3();}
    if(select_size.value=="arr1000"){create_mas4();}
    if(select_size.value=="arr5000"){create_mas5();}
    if(select_size.value=="arr10000"){create_mas6();}
    if(select_size.value=="arr25000"){create_mas7();}
    if(select_size.value=="arr50000"){create_mas8();}
    if(select_size.value=="arr100000"){create_mas9();}
}

filter_btn.onclick=()=>{
    mas=mas2;
    let date1 =Date.now();
    mas=mas.filter((element) => Math.trunc(element)%5==0 || Math.trunc(element)%3==0);
    let date2=Date.now()-date1;
    text2.innerHTML=mas;

    mas=mas2;

    let date3 =Date.now();
    let mas3=[];
    for (let i=0;i<mas.length;++i){
        if(mas[i]%5==0||mas[i]%3==0){
            mas3.push(mas[i]);
        }
    }
    mas=mas3;
    let date4=Date.now()-date3;
    text3.innerHTML=mas;
    addData(myChart,['JS', 'Arr'] ,[date2,date4]);
}

stat_btn.onclick=()=>{
    mas=mas2;
    let date1 =Date.now();
    mas=mas.reduce((total, amount, index, array) => {
        total += amount*amount;
        if( index == array.length-1) { 
          return total/array.length;
        }else { 
          return total;
        }
      });
    let date2=Date.now()-date1;
    text2.innerHTML=mas;

    mas=mas2;
    let date3 =Date.now();
    let mas3=0;
    for (let i=0;i<mas.length;++i){
        mas3+=(mas[i]*mas[i]);
    }
    mas=mas3/mas.length;
    let date4=Date.now()-date3;
    text3.innerHTML=mas;
    addData(myChart,['JS', 'Arr'] ,[date2,date4]);
}

modify_btn.onclick=()=>{
    mas=mas2;
    let date1 =Date.now();
    mas=mas.map(a=>a/2);
    let date2=Date.now()-date1;
    text2.innerHTML=mas;

    mas=mas2;
    let date3 =Date.now();
    let mas3=[];
    for (let i=0;i<mas.length;++i){
        mas3.push(mas[i]/2);
    }
    mas=mas3;
    let date4=Date.now()-date3;
    text3.innerHTML=mas;
    addData(myChart,['JS', 'Arr'] ,[date2,date4]);
}

check_btn1.onclick=()=>{
    mas=mas2;
    let date1 =Date.now();
    let check_every=mas.every(elem=>elem<20);
    let date2=Date.now()-date1;
    if(check_every===true){
        text2.innerHTML="All elements < 20";
    }
    else{
        text2.innerHTML="Min one element < 20";
    }

    mas=mas2;
    let date3 =Date.now();
    let cnt=0;
    for(let i=0;i<mas.length;++i){
        if(mas[i]>20){
            break;
        }
        if(i===mas.length-1){
            cnt=1;
        }
    }
    let date4=Date.now()-date3;

    if(cnt===1){
        text3.innerHTML="All elements < 20";
    }
    else{
        text3.innerHTML="Min one element < 20";
    }
    addData(myChart,['JS', 'Arr'] ,[date2,date4]);
}
search_btn.onclick=()=>{
    mas=mas2;
    let date1 =Date.now();
    mas=mas.find(elem=>elem<100&&elem>50);
    let date2=Date.now()-date1;
    text2.innerHTML=mas;
    mas=mas2;
    let date3 =Date.now();
    let mas3=[];
    for (let i=0;i<mas.length;++i){
        if(mas[i]<100&&mas[i]>50){
            mas3.push(mas[i]);
            break
        }
    }
    mas=mas3;
    let date4=Date.now()-date3;
    text3.innerHTML=mas;
    addData(myChart,['JS', 'Arr'] ,[date2,date4]);
}

sort_btn.onclick=()=>{
        mas=mas2;
        let date1 =Date.now();
        mas.sort((a,b)=>a-b);
        let date2=Date.now()-date1;
        text2.innerHTML=mas;

        mas=mas2;
        let date3 =Date.now();
        let mas3=[];
        for (let i = 1; i < mas.length; i++){
            for (let j = 0; j < mas.length-1; j++){
                if (mas[i] < mas[j]) {
                    let x = mas[i];
                    mas[i] = mas[j];
                    mas[j] = x;
                }
            }
        }
        let date4=Date.now()-date3;
        text3.innerHTML=mas;
        addData(myChart,['JS', 'Arr'] ,[date2,date4]);
}
