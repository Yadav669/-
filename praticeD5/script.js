const searchform = document.getElementById("searchform");
const search = document.getElementById("search");
const searchresult = document.getElementById("searchresult");
const more = document.getElementById("more");
const accesskey = "FdlkkHmhxKG2gH9N-5LwBahgNt9VP1j7Y89m1-tPb2w";

let keyword = "";
let page = 1;
async function searchImages(){
    keyword = search.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const responce = await fetch(url);
    const data = await responce.json();
    
    const results = data.results;
    if(page === 1){
        searchresult.innerHTML = ""
    }

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);
            
    })
    more.style.display = "block"
}

searchform.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

more.addEventListener("click",()=>{
    page++;
    searchImages();
})