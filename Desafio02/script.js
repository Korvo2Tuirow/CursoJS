function verificar() {


    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    fano = Number(fano.value)
    var res = document.querySelector('div#res')

    if (fano == 0 || fano > ano) {
        window.alert('!! ANO INCORRETO !! VERIFIQUE SEUS DADOS E TENTE NOVAMENTE')

    }

    else {

        var idade = ano - fano
        var sex = document.getElementsByName('radsex')
        var gen = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            gen = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'media/h-bebe.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'media/h-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'media/h-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'media/h-idoso.png')
            }


        } else if (sex[1].checked) {
            gen = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'media/m-bebe.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'media/m-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'media/m-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'media/m-idosa.png')
            }

           

        }

        res.innerHTML = `Você é ${gen} com ${idade} anos de idade.`
        res.appendChild(img)

    }
}