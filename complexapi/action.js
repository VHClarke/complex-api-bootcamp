var text = "shoe"

document.querySelector("#firstButton").addEventListener('click', function () {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
   targetUrl = 'https://cat-fact.herokuapp.com/facts'
   fetch(`${proxyUrl}${targetUrl}`)
   .then(blob => blob.json())
   .then(data => {
     let randomIndex = Math.floor(Math.random() * data.all.length -1)
     console.log(data.all[randomIndex].text);
     text = encodeURIComponent(data.all[randomIndex].text)
     document.getElementById('catFact').innerText = data.all[randomIndex].text
     console.log(data)
   })
   .catch(e => {
     console.log(e);
     return e;
   });
})



document.querySelector("#secondButton").addEventListener('click', function (){
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  let translateURL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190713T163620Z.94773265bf2744fe.8742c6b33f261d66999455435f222ac90f5bf6ff&text=${text}&lang=en-es`
  fetch(translateURL)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        document.getElementById('spanish').innerText = response.text


})
})
