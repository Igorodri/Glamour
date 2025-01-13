const btn = document.getElementById('btn-default_mobile');
const mobile_menu = document.querySelector('.mobile_menu');
let ativo = false;

btn.addEventListener('click', function () {
    if(ativo == false){
        mobile_menu.style.display = 'none'
        ativo = true;
    }else{
        mobile_menu.style.display = 'block'
        ativo = false;
    }
});