const getQuote = () => {
const { 
    quote, 
    author 
} = RandomizeArray(quotes);
getById("quoteText").innerText = quote;
getById("breakingBadAuthor").innerText = author;
}
getQuote()