
function carregar() {

    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min}`

    if (hora >= 0 && hora < 12) {

        msg2.innerHTML = ` Tenha um BOM DIA !`
        img.src = 'media/fotomanha.png'
        document.body.style.backgroundColor = '#ffeb99'


    } else if (hora >= 12 && hora <= 18) {

        msg2.innerHTML = ` Tenha uma BOA TARDE !`
        img.src = 'media/fototarde.png'
        document.body.style.backgroundColor = '#A1CAFF'
        

    } else {

        msg2.innerHTML = ` Tenha uma BOA NOITE !`
        img.src = 'media/fotonoite.png'
        document.body.style.backgroundColor = '#19334d'
    }



}















