let weatherData = document.querySelector('#weatherData');

let country = 'us';
let API_KEY = '46485d2fcdf2462db53b3976110afc57';
fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
.then(data => data.json())
.then(data => {
    for(let i = 0; i < data.articles.length; i++){
        weatherData.innerHTML += `

        <div class="card m-2" style="width: 18rem;">
  <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>



        `
        // console.log(data.articles[i])
    }
});




 
// .catch(err => console.log(err))