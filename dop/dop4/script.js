function show(){
 const btn = document.getElementById('btn')
 const input= document.querySelector('.pass')

 btn.addEventListener('click', () =>
 {
  btn.classList.toggle('active')
  if(input.getAttribute('type') === 'password')
      {input.setAttribute('type', 'text')}
  else
      {input.setAttribute('type', 'password')}
   })
}
show()