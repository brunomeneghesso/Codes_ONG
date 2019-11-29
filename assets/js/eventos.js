document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://togepi-91fe9.firebaseio.com/')

  db.download('/', function(data) {
  	let antigos = [params['anterior'],params['anteriores']]
    context = {'return' : antigos[0],
				'antigos':antigos,
				'keep_return':antigos.slice(1,)}

    coDesReplace('.access', context)

  })
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}