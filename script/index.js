
var header = document.getElementById('header')
var navegacao = document.getElementById('navegacao')
var main = document.getElementById('main')
var showSideBar = false


function mostrarNavBar(){
    showSideBar = !showSideBar
    console.log(showSideBar)

    if(showSideBar){
        console.log(showSideBar)
        navegacao.style.marginLeft = "5vw"


        console.log(navegacao.style.marginLeft)
    }else{
        navegacao.style.marginLeft = '-100vw'

        console.log("Ta fechada")

    }
}