import { deleteTweet, getTweetById } from "./tweetDetail.js"
import { buildTweetDetail } from "./tweetDetailView.js"
import { decodeToken } from '../utils/decodeToken.js'

export const tweetDetailController = async (tweetDetailElement, tweetId) => {

  try {
    const tweet = await getTweetById(tweetId)
    tweetDetailElement.innerHTML = buildTweetDetail(tweet)
    handleDeleteTweetButton(tweetDetailElement, tweet)
  } catch (error) {
    alert(error)
  }

  function handleDeleteTweetButton(tweetDetailElement, tweet) {
    const token = localStorage.getItem('token');
    const deleteButtonElement = tweetDetailElement.querySelector('#deleteTweet');

    if (!token) {
      deleteButtonElement.remove()
    } else {
      const userInfo = decodeToken(token);
      if (tweet.userId === userInfo.userId) {
        // añadir evento click al boton + enganchar con sparrest
        deleteButtonElement.addEventListener('click', async () => {
          const answer = confirm('¿Deseas borrar el tweet? seguro??!?!?!')
          if (answer) {
            await deleteTweet(tweet.id)
            window.location = '/'
          }
        })
      } else {
        deleteButtonElement.remove()
      }
    }
  }
}
