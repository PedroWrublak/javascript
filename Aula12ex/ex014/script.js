function carregar () {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagemmanha.png'
        document.body.style.background= '#ffd89d'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagemtarde.png'
        document.body.style.background = '#ffbf75'
    } else {
        //BOA NOITE!
        img.src = 'imagemnoite.png'
        document.body.style.background= '#141f3c'
    }
}

