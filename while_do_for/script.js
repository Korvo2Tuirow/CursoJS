function contar() {


    ini = document.getElementById('ini')
    fim = document.getElementById('fim')
    pas = document.getElementById('pas')
    res = document.getElementById('resultado')


    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {

        window.alert('Preencha todos os dados')

    }

    else {
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pas.value)

        if(p <= 0){
            window.alert('Passo invalido! Fica considerado como 1 ')
            p = 1

        }

        //contagem crescente
        if (i < f) {
            for (c = i; c <= f; c += p){
                res.innerHTML += ` \u{1F449} ${c} `
            }
        }
        //contagem regressiva
        else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += ` \u{1F449} ${c} `
            }

        }

    }

}