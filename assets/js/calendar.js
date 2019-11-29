document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://togepi-91fe9.firebaseio.com/')

  db.download('/', function(data) {
    if(typeof(params['anterior']) == 'undefined' || params['anterior'].length == 0){
        if(typeof(params['anteriores']) == 'undefined'){
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

        context = {'return' : params['anterior'],
        'antigos':[params['anteriores'].push(params['anterior'])],
        'no_antigos':false,
        'no_keep_return':true,
        'e_antigos':true,
        'keep_return':false}
      }
    }
  	let antigos = [params['anterior'],params['anteriores']]
    context = {'return' : antigos[0],
				'antigos':antigos,
				'keep_return':antigos.slice(1,)}

    coDesReplace('.access', context)

  })
})