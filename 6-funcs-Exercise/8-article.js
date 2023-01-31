function solve(articles){
    const divContent = document.getElementById('content');
    return function showNect(){
        if(articles.length){
            let article = document.createElement('article');
            article.textContent = articles.shift();
            divContent.appendChild(article);
        }
    };
}