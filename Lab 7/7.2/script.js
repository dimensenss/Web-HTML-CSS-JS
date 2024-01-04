function change() {
    let x;
    x=document.getElementById("1");
    x.style.zIndex = "1";
    x=document.getElementById("2");
    x.style.zIndex = "1";
    x=document.getElementById("3");
    x.style.zIndex = "1";
    x=document.getElementById("4");
    x.style.zIndex = "1";
    x=document.getElementById("5");
    x.style.zIndex = "1";
    x=document.getElementById("6");
    x.style.zIndex = "1";

    let selected_item = document.getElementById("select").selectedIndex;

    let el;
    if (selected_item == 0) {
        el = document.getElementById("1");
        el.style.zIndex = "7";
    }
    if (selected_item == 1) {
        el = document.getElementById("2");
        el.style.zIndex = "7";
    }
    if (selected_item == 2) {
        el = document.getElementById("3");
        el.style.zIndex = "7";
}
    if (selected_item == 3) {
        el = document.getElementById("4");
        el.style.zIndex = "7";
    }
    if (selected_item == 4) {
        el = document.getElementById("5");
        el.style.zIndex = "7";
    }
    if (selected_item == 5) {
        el = document.getElementById("6");
        el.style.zIndex = "7";
    }
}


