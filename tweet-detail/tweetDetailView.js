
export const buildTweetDetail = (tweet) => {
  const tweetDate = new Date(tweet.updatedAt)
  return `
    <p>${tweet.content} - ${tweetDate.toISOString()}</p>
    <button id="deleteTweet">borrar tweet</button>
  `
}
