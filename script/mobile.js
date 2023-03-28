const btnMenu =  document.getElementById('btn_icon')

function criaMenu(){
    const navega = document.getElementById('header')

    navega.classList.toggle('active')

    console.log("criando menu")
}


btnMenu.addEventListener('click', criaMenu) 