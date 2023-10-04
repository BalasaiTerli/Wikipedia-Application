let inputBox = document.getElementById("input-box")
let dynamicpage = document.getElementById("search-dynamic")

function searchAppend(eachObject){
    let {link,title,description} = eachObject;
    let division = document.createElement("div");
    division.classList.add("result-item")

    let head = document.createElement("a");
    head.textContent = title
    head.href = link
    head.classList.add("result-title")
    division.appendChild(head)

    let breaks = document.createElement("br")
    division.appendChild(breaks)

    let links = document.createElement("a")
    links.textContent = link
    links.href = link
    division.appendChild(links)

     let breakss = document.createElement("br");
     division.appendChild(breakss);

     let descriptions = document.createElement("p")
     descriptions.textContent = description;
     descriptions.classList.add("result-des")
     division.appendChild(descriptions)

     dynamicpage.appendChild(division)

}

function display(searchresults){
    spinner.classList.toggle("d-none");
    for (let eachObject of searchresults) {
        searchAppend(eachObject)
    }
}
function searchWikipedia(event){
    dynamicpage.textContent = ""
    if (event.key==="Enter") {
        spinner.classList.toggle("d-none")
        let content = inputBox.value
        let url = "https://apis.ccbp.in/wiki-search?search="+ content;
        let options = {
            method : "GET",
        }
        fetch(url,options)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
           let {search_results} = data;
           display(search_results)
        })
    }

}
inputBox.addEventListener("keydown",searchWikipedia)
