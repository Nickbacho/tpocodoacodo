// const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		q: 'English is hard, but detectably so'
// 	})
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


//  function redirectToTranslate() {
//   var apiKey = 'TU_CLAVE_DE_API'; // Reemplaza 'TU_CLAVE_DE_API' con tu propia clave de API
//    var targetUrl = 'https://translate.google.com/#auto/es/';    
//    var textToTranslate = prompt('Ingrese el texto a traducir:');
//if (textToTranslate) {
//  var encodedText = encodeURIComponent(textToTranslate);
//  var translateUrl = 'https://translation.googleapis.com/language/translate/v2?key=' + apiKey + '&q=' + encodedText + '&target=es';
//
//  fetch(translateUrl)
//    .then(response => response.json())
//    .then(data => {
//      var translatedText = data.data.translations[0].translatedText;
//      targetUrl += encodeURIComponent(translatedText);
//
//              window.open(targetUrl, '_blank');
//     })
//           .catch(error => {
//             console.error('Error al traducir el texto:', error);
//           });
//         }
//                }

function redirectToTranslate() {
  var apiKey = 'TU_CLAVE_DE_API'; // Reemplaza 'TU_CLAVE_DE_API' con tu propia clave de API
  var targetUrl = 'https://translate.google.com/#auto/es/';

  var textToTranslate = prompt('Ingrese el texto a traducir:');
  if (textToTranslate) {
    var encodedText = encodeURIComponent(textToTranslate);
    var translateUrl = 'https://translation.googleapis.com/language/translate/v2?key=' + apiKey + '&q=' + encodedText + '&target=es';

    fetch(translateUrl)
      .then((response) => response.json())
      .then(data => {
        var translatedText = data.translations;
        targetUrl += encodedText;

        window.open(targetUrl, '_blank');
      })
      .catch(error => {
        console.error('Error al traducir el texto:', error);
      });
  }
}

