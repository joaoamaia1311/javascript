function atualizarHora() {    
    const horaAtual = new Date()
    let horas = horaAtual.getHours()
    let minutos = horaAtual.getMinutes()
    let segundos = horaAtual.getSeconds()
    let mensagem = ''

    // Adiciona zero à esquerda se necessário
    horas = horas < 10 ? `0${horas}` : horas
    minutos = minutos < 10 ? `0${minutos}` : minutos
    segundos = segundos < 10 ? `0${segundos}` : segundos

    var mostrador = document.querySelector('.horas')
    var hora = `${horas}:${minutos}:${segundos}`
    var imagem = document.querySelector('.imagem-hora')

    if (horas >= 6 && horas < 12) {
        mensagem = 'Bom dia!'
    }
    else if(horas >= 12 && horas < 18) {
        mensagem = 'Boa tarde!' 
    }
    else {
        mensagem = 'Boa noite!'
    }

    mostrador.innerHTML = `<p>Agora são <strong>${hora}</strong> horas, ${mensagem}</p>`

    if (horas >= 6 && horas < 12) {
        imagem.innerHTML = '<img src="source/dia-redondo.png" alt="Bom dia">'
    }
    else if(horas >= 12 && horas < 18) {
        imagem.innerHTML = '<img src="source/tarde-redondo.png" alt="Boa tarde">' 
    }
    else {
        imagem.innerHTML = '<img src="source/noite-redondo.png" alt="Boa noite">'
    }
}
setInterval(atualizarHora, 1000);