const allQuotes = [
  [
    'I never saw any of them again — except the cops. No way has yet been invented to say goodbye to them.',
    'The Long Goodbye'
  ],
  [
    'I knew one thing: as soon as anyone said you didn’t need a gun, you’d better take one along that worked.',
    'The Long Goodbye'
  ],
  [
    'There is no trap so deadly as the trap you set for yourself.',
    'The Long Goodbye'
  ],
  [
    'You talk too damn much and too damn much of it is about you.',
    'The Long Goodbye'
  ],
  [
    'The tragedy of life, Howard, is not that the beautiful die young, but that they grow old and mean.',
    'The Long Goodbye'
  ],
  [
    'The girl gave him a look which ought to have stuck at least four inches out of his back.',
    'The Long Goodbye'
  ],
  [
    'The French have a phrase for it. The bastards have a phrase for everything and they are always right. To say goodbye is to die a little.',
    'The Long Goodbye'
  ],
  [
    'As honest as you can expect a man to be in a world where its going out of style.',
    'The Big Sleep'
  ],
  ['Dead men are heavier than broken hearts.', 'The Big Sleep'],
  [
    'From thirty feet away she looked like a lot of class. From ten feet away she looked like something made up to be seen from thirty feet away.',
    'The High Window'
  ],
  [
    'Cleverness, like perhaps strawberries, is a perishable commodity.',
    'Letter to Helga Greene'
  ],
  [
    "A legal system which can't convict Al Capone of anything but income tax fraud is apt to make the police rather cynical.",
    'Letter to James Sandoe'
  ],
  [
    'The character that lasts is an ordinary guy with some extraordinary qualities',
    'Letter to Erle Stanley Gardner'
  ],
  [
    'When in doubt have a man come through the door with a gun in his hand.',
    'The Simple Art of Murder'
  ],
  [
    "Time passed again. I don't know how long. I had no watch. They don't make that kind of time in watches anyway.",
    'Farewell My Lovely'
  ]
];

function getQuote() {
  if (typeof getQuote.quotes === 'undefined') {
    getQuote.quotes = [];
  }

  if (getQuote.quotes.length === 0) {
    //  Fill with indices each time it runs out
    for (let q = 0; q < allQuotes.length; ++q) {
      getQuote.quotes.push(q);
    }
  }

  //  Get a random index into getQuote.quotes
  let index = Math.floor(Math.random() * getQuote.quotes.length);

  //  Get the actual index into allQuotes
  const quoteIndex = getQuote.quotes[index];

  //  Remove the random index so it doesn't get picked again until all quotes
  //  have been displayed once
  getQuote.quotes.splice(index, 1);

  return allQuotes[quoteIndex];
}

function updateQuote() {
  //  Update quote and source text
  let quote = getQuote();
  document.getElementById('quote-text').textContent = '“' + quote[0] + '”';
  document.getElementById('quote-source').textContent = ' — ' + quote[1];

  //  Update tweet button text
  let tweetButton = document.getElementById('tweet-button');
  tweetButton.href =
    'https://twitter.com/intent/tweet?text="' +
    encodeURIComponent(quote[0] + ' — ' + quote[1]) +
    '"';
}

function onReady() {
  updateQuote();
  let button = document.getElementById('quote-button');
  button.addEventListener('click', updateQuote);
}

if (document.readyState !== 'loading') {
  onReady();
} else {
  document.addEventListener('DOMContentLoaded', onReady);
}
