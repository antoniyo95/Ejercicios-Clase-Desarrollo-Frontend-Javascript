export const createTweet = async (tweetContent) => {

  const newTweet = {
    content: tweetContent
  }

  const token = localStorage.getItem('token')

  const response = await fetch('http://localhost:8000/api/tweets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(newTweet)
  })

  if (!response.ok) {
    throw new Error('Error creando tweet')
  }

}
