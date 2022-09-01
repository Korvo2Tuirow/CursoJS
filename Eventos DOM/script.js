var a = window.document.getElementById('area')
        
/*     outra opção
a.addEventListener('click', clicar)
a.addEventListener('mouseout', sair)
a.addEventListener('mouseenter', entrar)
*/

function clicar() {

    a.innerText = 'CLICOU'
    a.style.borderRadius ='50%'
    a.style.backgroundColor = 'red'
            
}

function entrar(){
    
    a.innerText = 'ENTROU'
    a.style.backgroundColor = 'blue'
    a.style.borderRadius ='40%'
    
    
    
}

function sair() {

    a.innerText = 'SAIU'
    a.style.backgroundColor = 'rgb(18, 230, 18)'
    a.style.borderRadius ='0%'

}

