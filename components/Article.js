// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

//data imported 

import data from '../data/articleData'

// console.log(data)


  // Step 1: Write a component called 'articleMaker' to create an article.
  // Your component is a function that takes an article object as its only argument,
  // and returns a DOM node looking like the one below:

  // <div class="article">
  //   <h2>{title of the article}</h2>
  //   <p class="date">{date of the article}</p>

  //   {three separate paragraph elements}

  //   <span class="expandButton">+</span>
  // </div>

function articleMaker(articleObject) {

  const article = document.createElement('div')
  const articleTitle = document.createElement('h2')
  const articleDate = document.createElement('p')
  const articlePara1 = document.createElement('p')
  const articlePara2 = document.createElement('p')
  const articlePara3 = document.createElement('p')
  const expandButton = document.createElement('span')

  article.appendChild(articleTitle)
  article.appendChild(articleDate)
  article.appendChild(articlePara1)
  article.appendChild(articlePara2)
  article.appendChild(articlePara3)
  article.appendChild(expandButton)

  article.classList.add('article')
  articleDate.classList.add('date')
  expandButton.classList.add('expandButton')

  articleTitle.textContent = articleObject.title
  articleDate.textContent = articleObject.date
  articlePara1.textContent = articleObject.firstParagraph
  articlePara2.textContent = articleObject.secondParagraph
  articlePara3.textContent = articleObject.thirdParagraph
  expandButton.textContent = '+'

  // Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  // This listener should toggle the class 'article-open' on div.article.

  expandButton.addEventListener('click', (event) => {
    article.classList.toggle('article-open')
  })

  // Step 3: Don't forget to return something from your function!
  return article
}
// console.log(articleMaker(data[0]))
  // Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  // to create a div.article element and append it to the DOM inside div.articles (see index.html).

  data.forEach((articleObject) => {
    document.querySelector('.articles').appendChild(articleMaker(articleObject))
  })

  // Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  // Refresh the page to see the new article.

  // refer to ../data/articleData.js
