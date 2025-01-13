const btn_masculino = document.getElementById("masculino");
const btn_feminino = document.getElementById("feminino");

const area_masculino = document.getElementById("container-masculino")
const area_feminino = document.getElementById("container-feminino")


const btn_cancelar_masculino = document.getElementById("button-masculino");
const btn_cancelar_feminino = document.getElementById("button-feminino");



btn_masculino.addEventListener("click", function(){
    area_masculino.style.display = 'grid'
    area_feminino.style.display = 'none'

    btn_masculino.style.display = 'none'
    btn_feminino.style.display = 'none'
});

btn_feminino.addEventListener("click", function(){
    area_masculino.style.display = 'none'
    area_feminino.style.display = 'grid'

    btn_masculino.style.display = 'none'
    btn_feminino.style.display = 'none'
});

btn_cancelar_masculino.addEventListener("click", function(){
    area_masculino.style.display = 'none'

    btn_masculino.style.display = 'inline-block'
    btn_feminino.style.display = 'inline-block'
})

btn_cancelar_feminino.addEventListener("click", function(){
    area_feminino.style.display = 'none'

    btn_masculino.style.display = 'inline-block'
    btn_feminino.style.display = 'inline-block'
})


