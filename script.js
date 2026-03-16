const quotes = [
"Protecting the planet starts with small actions.",
"The Earth is what we all have in common.",
"Plastic pollution is not just an ocean problem — it's a human problem.",
"Every piece of plastic ever made still exists somewhere.",
"Change the world by changing your habits."
];

function newQuote(){
let random = Math.floor(Math.random()*quotes.length);
alert(quotes[random]);
}

window.onload = function(){
setTimeout(newQuote,2000);
}
