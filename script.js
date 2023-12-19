
const relogio = document.getElementById('relogio')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const pause = document.getElementById('pause')
const texto = document.getElementById('texto')
let segundos = 0
let minutos = 0
start.addEventListener('click', () => {
    texto.style.display = 'none'
    const contador = setInterval(() => {
      segundos++
      if(segundos == 60){
          segundos = 0
          minutos++
        }
      if(segundos > 9 && minutos >9){
        relogio.textContent = `${minutos}:${segundos}`
      } else if(minutos > 9 && segundos<9){
        relogio.textContent = `${minutos}:0${segundos}`
      } else if(minutos<9 && segundos>9){
        relogio.textContent = `0${minutos}:${segundos}`
      } else{
        relogio.textContent = `0${minutos}:0${segundos}`
      }

        console.log('funcionando ' + segundos)

stop.addEventListener('click', () =>{
    clearInterval(contador)
    texto.textContent = `Parado em ${minutos} minutos e ${segundos} segundos`
    texto.style.display = 'block'
    setTimeout(() => {
        segundos = 0
        minutos = 0
        relogio.textContent = `0${minutos}:0${segundos}`
    }, 100)
    console.log('stoped')
    })
pause.addEventListener('click', ()=>{
    clearInterval(contador)
    console.log('paused')
})
}, 1000)
})
