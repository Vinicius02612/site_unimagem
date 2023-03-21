/* Url ficiticia para ser usada quando o usuario aceitar os termos */

let urlCookie = 'https://jsonplaceholder.typicode.com/posts' 


/* modal de com as informações do cookie e politca de privacidade */
let cookieHtml = `

    <div class="modal">
        <h3>Atenção</h3>
        <div class="text-modal">      
            <p>
            Nós uttilizamos cookies para melhorar sua experiência de usuário.
                Para conferir detalhadamente todos os cookies que usamos, leia <a href="http://">Politica de Privacidade</a>
        </div>
        <button id="fechar">Fechar</button>
    </div>
`

/* Usando localStorage do site para pegar o modal  e verificar se ele ja esta no site */
let isPageCookie = localStorage.getItem('modal')


/* Verifico se modal não esta aparecendo */
if(!isPageCookie){

    /* se não estiver aparecendo adiciono o modal no html assim que a pagina abrir */
    document.body.innerHTML += cookieHtml

    /* Pego as classes referente ao modal e o botão fechar no html   */
    let Areacookie = document.querySelector('.modal');
    let botaoFechar = Areacookie.querySelector('button')

    /* Criando uma função assincrona  click para remover o modal assim que clicar em fechar */
    
    botaoFechar.addEventListener('click', async () =>{
        Areacookie.remove()
        
    /* A mesma tambem faz a chamada na url ficticia e armazena o id da maquina do usuario que acessou o site */
        let result = await fetch(urlCookie)

        let json = await result.json()

        if(json.error!= ''){

            let id = '123'
            localStorage.setItem('modal', id)
        }




         
/*         localStorage.setItem('modal', '123')
 */
        
    })
}