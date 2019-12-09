document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let data = coDesConnect('https://togepi-91fe9.firebaseio.com/')

  db.download('/', function(data) {
    context={'teste':'ok'
      'eventos':data['eventos']}
    
    coDesReplace('.teste', context)

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