const accesskey = "PDPRlzOz-FPt77w1lYQdnraXnWylWB8-KMibJg1Q1fU"



const searchForm = document.getElementById("search-form");
const searchBos = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = 'https://api.unsplash.com/search/photo?page=${page}&query=${keyword}&client_id=${accesskey}';


    const response = await fetch(url);
    const data = await response.json();


    console.log(data);

}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();



    const accesskey = "ne1Z0kHgjyhB4Nfm22PDWkIUW-q3B6lrTsBD2QURmZ0"
    const searchForm = document.getElementById("search-form");
    const searchBox = document.getElementById("search-box");
    const searchResult = document.getElementById("search-result");
    const searchMoreBtn = document.getElementById("show-more-btn");
    
    
    let keyword = "";
    let page = 1;
    
    async function searchImages(){
        keyword = searchBox.value;
        const url = https://api.unsplash.com/photos?page=${page}&query=${keyword}&client_id=${accesskey};
    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    
    searchForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        page = 1;
        searchImages();
    })











})