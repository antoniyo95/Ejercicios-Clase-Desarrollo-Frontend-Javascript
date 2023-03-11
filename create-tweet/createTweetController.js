import { createTweet } from "./createTweet.js";

export const createTweetController = async (createTweetFormElement) => {
  createTweetFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createTweetFormElement);
    const tweetContent = formData.get('tweetContent');

    try {
      await createTweet(tweetContent)
      window.location = '/'
    } catch (error) {
      alert(error)
    }
  })
}
