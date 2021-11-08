let button  = document.querySelector('.btn');
// console.log(button);
let menu  = document.querySelector('.nav');
let overlay = document.querySelector('.overlay');
// console.log(menu);

button.addEventListener('click',function(){
    menu.classList.add('open');
    overlay.classList.add('open')
});

overlay.addEventListener('click',function(){
    menu.classList.remove('open');
    overlay.classList.remove('open')
})
