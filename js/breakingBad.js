const getQuote = () => {
const { 
    quote, 
    author 
} = Randomize(quotes);
getById("quoteText").innerText = quote;
getById("breakingBadAuthor").innerText = author;
}
getQuote()