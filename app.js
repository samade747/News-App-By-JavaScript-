let country = 'us';
let API_KEY = '46485d2fcdf2462db53b3976110afc57';
fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
.then(data => data.json())
.then(data => console.log(data))
.catch(err => console.log(err))