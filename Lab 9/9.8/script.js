function f1() {
setTimeout(m1,1000);
    setTimeout(m2,2000);
    setTimeout(m3,3000);
    setTimeout(m4,4000);
    setTimeout(m5,5000);
    setTimeout(m1,6000);
    setTimeout(m2,7000);
    setTimeout(m3,8000);
    setTimeout(m4,9000);
    setTimeout(m5,10000);
}

function m1() {
    let anim = document.getElementsByName("circle")[0];
    anim.classList.remove("move50");
    anim.classList.remove("move25");
    anim.classList.remove("move100");
    anim.classList.add("move0");
}
function m2() {
    let anim = document.getElementsByName("circle")[0];
    anim.classList.remove("move0");
    anim.classList.add("move25");
}
function m3() {
    let anim = document.getElementsByName("circle")[0];
    anim.classList.remove("move25");
    anim.classList.add("move50");
}
function m4() {
    let anim = document.getElementsByName("circle")[0];
    anim.classList.remove("move50");
    anim.classList.add("move75");
}
function m5() {
    let anim = document.getElementsByName("circle")[0];
    anim.classList.remove("move75");
    anim.classList.add("move100");
}
