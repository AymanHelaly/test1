var quotes = [
  "❝ Life is what happens when you're busy making other plans.❞",
  "❝ The only limit to our realization of tomorrow will be our doubts of today.❞ ",
  "❝ In three words I can sum up everything I've learned about life: it goes on.❞",
  "❝ Be yourself; everyone else is already taken. ❞",
  "❝ reality is finally better than your dreams. ❞",
  "❝ If you tell the truth, you don't have to remember anything. ❞",
  "❝ A friend is someone who knows all about you and still loves you. ❞",
  "❝ Always forgive your enemies; nothing annoys them so much. ❞",
  "❝ Live as if you were to die tomorrow. Learn as if you were to live forever. ❞",
];

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  var quoteElement = document.getElementById("the-quote");
  quoteElement.textContent = getRandomQuote();
}

document.getElementById("new-quote").addEventListener("click", displayQuote);
