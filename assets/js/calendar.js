document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://togepi-91fe9.firebaseio.com/')

  db.download('/', function(data) {
    context={'return':params['anterior']}
  	
    coDesReplace('.access', context)

  })
})