export const createTweet = (tweetContent) => {
  fetch('https://ejemplo.com/api/crear-tweet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      content: tweetContent
    })
  })
}

