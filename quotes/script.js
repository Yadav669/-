let quote = document.getElementById("text")
let author = document.getElementById("author")
let btn = document.getElementById("btn");
const api_url = "https://api.quotable.io/random"

 async function getQuotes(abcd){
    const responce = await fetch(abcd)
    var data = await responce.json()
    console.log(data);
    quote.innerHTML = data.content
    author.innerHTML = "-" + data.author
 }
 getQuotes(api_url)