const searchbox = document.querySelector(".Search-box");
searchbox.addEventListener('keypress',setQuery);

function  setQuery(evt) {
    if(evt.keyCode == 13){
        getResults(searchbox.value);
    }
}

function getResults(query) {
    try {
        fetch("https://weatherapi-com.p.rapidapi.com/ip.json?q=%3CREQUIRED%3E", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
		"x-rapidapi-key": "48aa7c0833msh1cd6ad443d463dep1612e5jsnd4e8211d1a87"
	}
})
    .then(weather =>{
       return weather.json();
    }).then(displayResult);}
    catch(err) {
       document.querySelector(".weather").innerHTML = err.message;
      } 
    }