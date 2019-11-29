document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://togepi-91fe9.firebaseio.com/')

  db.download('/', function(data) {
    if(typeof(params['anterior']) == 'undefined' ){
        if(typeof(params['anteriores']) == 'undefined'|| params['anteriores'].length == 0){
          context = {'return' : 'main',
          'no_antigos':true,
          'no_keep_return':true,
          'e_antigos':false,
          'keep_return':false}
        }
        else{
          context = {'return' : params['anteriores'][-1],
          'antigos':params['anteriores'],
          'keep_return':params['anteriores'].slice(1,),
          'no_antigos':false,
          'no_keep_return':false,
          'e_antigos':true,
          'keep_return':true}
        }
      }
    else{
      if(typeof(params['anteriores']) == 'undefined' ){
        context = {'return' : params['anterior'],
        'antigos':[params['anterior']],
        'no_antigos':false,
        'no_keep_return':true,
        'e_antigos':true,
        'keep_return':false}
      }
      else{
        let antigos = params['anteriores']
        antigos.push(params['anterior'])
        context = {'return' : params['anterior'],
        'antigos':antigos,
        'keep_return': params['anterior'],
        'no_antigos':false,
        'no_keep_return':true,
        'e_antigos':true,
        'keep_return':false}
      }
    }
  	
    coDesReplace('.access', context)

  })
})