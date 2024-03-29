let key = "b8607257adc845a399e7344fc72a0ff5"

const inputData = document.getElementById("inputData")
const btn = document.getElementById("btn")
const cardData = document.querySelector(".cardData")
const getData = async (input) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`)
    const jsonData = await res.json()
    console.log(jsonData.articles[0]);

    cardData.innerHTML = "";
    jsonData.articles.forEach(function (article) {
        console.log(article);

        const divs = document.createElement("div")
        divs.classList.add("card");
        cardData.appendChild(divs);
        divs.innerHTML = `
            <img src="${article.urlToImage}" alt="">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
        `
        divs.addEventListener("click", function(){
            window.open(article.url)
        })
    })
}

window.addEventListener("load", function(){
    getData("India")
})
btn.addEventListener("click", function(){
    const inputText = inputData.value;
    getData(inputText)
})

function navClick(navName){
    getData(navName)
}
