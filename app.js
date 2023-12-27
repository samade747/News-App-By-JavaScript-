let weatherData = document.querySelector('#newsdata');

let searchbyname = document.getElementById('findout')

// console.log(searchbyname)

let getsearch = () =>{
    // let country = searchbyname.value.trim();
    // if(!country){
    //   alert('please enter a valid country');
    //   return;
    // }

let API_KEY = '46485d2fcdf2462db53b3976110afc57';

weatherData.innerHTML = '';
fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=46485d2fcdf2462db53b3976110afc57')
// fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-11-26&sortBy=publishedAt&apiKey=${API_KEY}`)
// fetch(`https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${API_KEY}`)
.then(data => data.json())
.then(data => {
    for(let i = 0; i < Math.min(data.articles.length, 50); i++){
        weatherData.innerHTML += `

        <div class="card m-3" style="width: 16rem;">
  <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.articles[i].title}</h5>
    <p class="card-text">${data.articles[i].description} </p>
    <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      `
        
    }
})

.catch(error => console.error("Error fetching data:", error))


}

document.querySelector('.btn-warning').addEventListener('click', getsearch);




 