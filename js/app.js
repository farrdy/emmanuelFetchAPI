const auth_token = '217b8976588b492b9c76208049e84029';
async function getNewsFeeds() {
    const feedsResponse = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-04&sortBy=publishedAt&apiKey=${auth_token}`);
    const feeds = await feedsResponse.json();
    return {
        feeds
    }
}
window.addEventListener('DOMContentLoaded', (event) => {
    getNewsFeeds()
        .then(feed => {
            const articles = feed.feeds.articles.slice(0, 2)
            console.log(articles);
            let HTMLTemplate = '';
            //    articles.map(article=>{  })
            articles.forEach(article => {
                HTMLTemplate += `
                    
   <div class="row">
   <div class="col-sm-3"><img src="${article.urlToImage}"/ width="20%"></div> 
   <div class="col-sm-6">${article.publishedAt} ${article.title}</div> 
   <div class="col-sm-3">${article.description}></div>                         
                             
                    </div>
               
               `;
            });
            const results = document.querySelector('#results');
            this.results.innerHTML = HTMLTemplate;
        });
});