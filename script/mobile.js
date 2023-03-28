const btnMenu =  document.getElementById('btn_icon')

function criaMenu(){
    const navega = document.getElementById('navegacao')

    navega.classList.toggle('active')

    console.log("criando menu")
}


btnMenu.addEventListener('click', criaMenu)