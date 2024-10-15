const btnAlternar = document.getElementById('btn-alternar')
const imgLampada = document.getElementById('lampada')
const baseUrl = "https://7c565c69-5697-43a8-80cc-4aba20c8f7df-00-229cg72bidk8j.janeway.replit.dev/"

btnAlternar.addEventListener('click', function() {
  if (imgLampada.src == baseUrl + 'lampada0.png') {
    imgLampada.scr = "lampada2.png"
  } else {
    imgLampada.scr = "lampada0.png"
  }

})

