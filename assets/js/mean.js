let custmez=document.getElementById("custmez");
let  custmezCust = document.getElementById("custmez-cust");
let close = document.getElementById('close')
let open = false


let navgition = document.querySelector('.navgition i')
let nav = document.querySelector('nav')
let exit = document.querySelector('.header header nav ul i')
let navg = false

custmez.addEventListener('click' , function () {
    if(open == false){
        custmez.style.right='255px'
        custmez.style.backgroundColor='#09c'
        custmez.style.color='#fff'
        custmezCust.style.right='0'
        custmezCust.style.transition='1s'
        open = true;
    }else if(open == true){
        custmez.style.right='0'
        custmez.style.backgroundColor='#fff'
        custmez.style.color='#000'
        custmezCust.style.transition='1s'
        custmezCust.style.right='-350px'
        open = false;
    }
})
close.addEventListener('click' , function () {
    if(open == false){
        custmez.style.right='250px'
        custmezCust.style.right='0'
        open = true;
    }else{
        custmez.style.right='0'
        custmezCust.style.right='-350px'
        open = false;
    }
})

navgition.addEventListener('click' , function () {
    if(navg == false){
        nav.style.display='block'
        navg = true;
    }else if(navg == true){
        nav.style.display='none'
        navg = false;
    }
})
exit.addEventListener('click' , function () {
    if(navg == false){
        nav.style.display='block'
        navg = true;
    }else {
        nav.style.display='none'
        navg = false;
    }
})
