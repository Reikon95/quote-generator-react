const quotes = [
    {name: 'Cameron Blackwood', pic: {}, bio: 'software engineer', quote: "'test test test test'"}, 
    {name: 'Sam Blackwood', pic: {}, bio: 'dog', quote: "'woof'"},
    {name: 'Jenny Blackwood', pic: {}, bio: 'other dog', quote: "'arf arf"}
];

function getRandom() {

return quotes[Math.random() * Math.floor(quotes.length)]

}

