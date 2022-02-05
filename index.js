const api = {
    key: "24806459c9fd9d9c9455a40e7909de95", 
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector(".Search-box");
searchbox.addEventListener('keypress',setQuery);

function  setQuery(evt) {
    if(evt.keyCode == 13){
        getResults(searchbox.value);
    }
}

function getResults(query) {

}