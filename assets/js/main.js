document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://togepi-91fe9.firebaseio.com/')
  if(params['filtrado']=='sim'){
  	let eventos='eventos-filtro'
  	let fil='sim'
  }
  else{
  	let eventos='eventos'
  	let fil = 'nao'
  }
  db.download('/', function(data) {
    context={'return':params['anterior'],
			'ev':eventos
			'filtrado':fil}
    
    coDesReplace('.access', context)

  })
})

