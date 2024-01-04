
const block = document.querySelector('.block');
const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const setButton = document.querySelector('.set');
const modal = document.querySelector('.modal');
const selectBg = document.querySelector('.selectBg');
const selectBorder = document.querySelector('.selectBorder')

openButton.addEventListener('click', function(){
    modal.showModal();
})
setButton.addEventListener('click', function(){
    modal.close();
    if(selectBg.value=="cat"){
         block.style.background = `url("/12.6/cat.png")`;
    }
    if(selectBg.value=="dog"){
        block.style.background = `url("/12.6/dog.png")`;
   }
   if(selectBg.value=="mouse"){
    block.style.background = `url("/12.6/mouse.png")`;
}
   
    block.style.backgroundRepeat = ` ${selectBorder.value}`;
})
closeButton.addEventListener('click', function(){
    modal.close();    
})

