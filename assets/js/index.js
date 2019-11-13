document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://togepi-91fe9.firebaseio.com/') //inserie link do database
  let params = coDesExtract()
  db.download('/', function(data) {
    console.log(data)
    let context = {
      'anterior':params['anterior']
      // dicionario para substituicao
  } 
    coDesReplace('', context)//inserir classe a ser alterada
  })
})
