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
                img.style.animation = "tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'media/h-jovem.png')
                img.style.animation = "tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'media/h-adulto.png')
                img.style.animation = "tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            } else {
                //idoso
                img.setAttribute('src', 'media/h-idoso.png')
                img.style.animation = "tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            }


        } else if (sex[1].checked) {
            gen = 'Mulher'
            

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'media/m-bebe.png')
                img.style.animation = "tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'media/m-jovem.png')
                img.style.animation = "tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'media/m-adulta.png')
                img.style.animation = "tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            } else {
                //idoso
                img.setAttribute('src', 'media/m-idosa.png')
                img.style.animation = "tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            }

           

        }

        res.innerHTML = `Você é ${gen} com ${idade} anos de idade.`
        res.appendChild(img)

    }
}