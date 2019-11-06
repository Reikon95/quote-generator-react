const quotes = [
    {name: 'Cameron Blackwood', pic: {}, bio: 'software engineer', quote: "'test test test test'"}, 
    {name: 'Sam Blackwood', pic: {}, bio: 'dog', quote: "'woof'"}
];

function getRandom() {

return quotes[Math.random() * Math.floor(quotes.length)]

}

