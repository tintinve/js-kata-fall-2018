"use strict";
let template = document.querySelector(".template1").content;
let hash = "Copenhagen";
let fetchLink = "https://kea-alt-del.dk/twitter/api/?count=10?hashtag=" + hash;
let appendTo = document.querySelector("main");
fetch(fetchLink)
  .then(result => result.json())
  .then(showTweets);

function showTweets(tweet) {
  let tweetArray = tweet.statuses;
  tweetArray.forEach(showTweet);
}

function showTweet(aTweet) {
  console.log(aTweet);
  let clone = template.cloneNode(true);
  clone.querySelector("h1").textContent = aTweet.text;
  appendTo.appendChild(clone);
}
