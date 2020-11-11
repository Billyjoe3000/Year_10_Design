/*
Questions:
- How to source a large array in a js file, don't want a giant list of stocks for the autocomplete
- How to execute function on autocomplete
- 
*/

// use .checked for checkbox dom
function test() {
	console.log(document.getElementById("smallCap").checked);
}
//*****************************************************************

// main function for api call
function fetchAPI() {

	var symbol = ""
	var args = "/v2/reference/tickers" + symbol
	var params = ""


	var apiKey = "8twJeoNW9ilnBJw_2GV1pBB1OZnFFU_p";
	var url = "https://api.polygon.io" + args + "?apiKey=" + apiKey + params;
	console.log(url)

	fetch(url) // fetching the data
	.then((resp) => resp.json())
	.then(function data(data) {
		console.log(data) // output of data

	});
}
//*****************************************************************

// parameter autocomplete options
var autocomplete1Options = {data: {
	"AAPL": null
	}

};

// parameter autocomplete init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete1');
    var instances = M.Autocomplete.init(elems, autocomplete1Options);
  });


// select components options
var selectOptions = {};

// select init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, selectOptions);
  });

