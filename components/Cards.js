// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    console.log(res.data)
})

function cardCreator(article){
    const card = document.createElement('div');
    card.classList.add('card');

        const headline = document.createElement('div');
        headline.classList.add('headline');
        headline.innerHTML = article.headline;

        const author = document.createElement('div');
        author.classList.add('author');

            const img_container = document.createElement('div');
            img_container.classList.add('img_container');

                const img = document.createElement('img');
                img.src = article.authorPhoto;

            const span = document.createElement('span');
            span.innerHTML = `By ${article.authorName}`;

    img_container.appendChild(img);
    author.appendChild(img_container); author.appendChild(span);
    card.appendChild(headline); card.appendChild(author);
    
    return(card);
}