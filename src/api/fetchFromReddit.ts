import axios from "axios";

const fetchFromReddit = async (subreddit: string, after?: string) => {
  try {
    console.log("sending request...");
    let url = `https://www.reddit.com/r/${subreddit}.json?raw_json=1`;
    if (after) url = `${url}&after=${after}`;
    const response = await axios.get(url);
    // const response = await (await fetch(url)).json();
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export default fetchFromReddit;
