function relogio() { //envolver em uma função para tirar do escopo global

function criaHoraDosSegundos(seconds){
    const data = new Date(seconds * 1000) //Por causa dos ms
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT' //Para não considerar o time zone do brasil que seria -3
    })
}

const relogio = document.querySelector('.watch')
let seconds = 0
let timer

function iniciaRelogio(){
    timer = setInterval(() => {
        seconds++
        relogio.innerHTML = criaHoraDosSegundos(seconds)
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target //o target identifica os elementos clicados
    if (el.classList.contains('start')) {
        relogio.classList.remove('paused')
        clearInterval(timer)//garante que se tiver um timer rodando, não fique outro lá lodando tbm, por isso colocamos de novo
        iniciaRelogio()
    } 
    
    if (el.classList.contains('pause')) {
        relogio.classList.add('paused')
        clearInterval(timer)
    }
    
    if (el.classList.contains('restart')) {
        relogio.classList.remove('paused')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        seconds = 0
    }
})
}
relogio()
