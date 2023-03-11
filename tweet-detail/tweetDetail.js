export const getTweetById = async (tweetId) => {
  const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}`)

  if (!response.ok) {
    throw new Error('El tweet solicitado no existe')
  }

  const tweet = await response.json();

  return tweet;
}

export const deleteTweet = async (tweetId) => {
  const token = localStorage.getItem('token')

  const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`,
    }
  })
}
