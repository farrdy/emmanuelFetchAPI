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
                    <div class="col-md-4 mt-4">
                         <div class="card">
                              <div class="card-body">
                                   <h2>${article.title}</h2> 
                                   <h2>${article.publishedAt}</h2> 
                              </div>
                              <div class="card-body">
                              <p>${article.description}</p> 
                              <img src="${article.urlToImage}"/>
                         </div>
                             
                         </div>
                    </div>
               
               `;
            });
            this.results.innerHTML = HTMLTemplate;
        });
});