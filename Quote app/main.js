const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";
async function getQoute(url) {
  const response = await fetch(url);
  var data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function tweetHandle() {
  alert("this service don't work now :)");
}

getQoute(api_url);
