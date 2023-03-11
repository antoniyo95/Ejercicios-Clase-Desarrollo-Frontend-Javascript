export function buildTweetView(tweet) {
  const newTweetElement = document.createElement('article');
  newTweetElement.classList.add('tweet')

  newTweetElement.innerHTML = `
    <a href="/tweet-detail.html?tweetId=${tweet.id}">
      <div class="user-info">
      </div>
      <p>${tweet.content}</p>
    </a>
  `;

  return newTweetElement;
}

export function buildSpinnerView() {
  return `<div class="spinner"><div></div><div></div><div></div></div>`
}

export function buildErrorLoadingTweets() {
  return `<p class="load-error">Ha habido un problema cargando los tweets. Inténtalo de nuevo más tarde</p>`
}

export function buildEmptyTweetList() {
  return `<p>No hay resultados disponibles</p>`;
}
