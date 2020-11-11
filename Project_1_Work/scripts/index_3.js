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

// calculating params that have not been used yet
var params = ["Param 1", "Param 2", "Param 3"]; // list the params
var paramsUsed = [false, false, false]; // all are false when start (they have not been used yet)

function usedParams(currentInput) {
	// console.log("usedParams running")
	// console.log(params)
	// console.log(paramsUsed)

	for (i = 0; i < params.length; i++) {
		if (currentInput == params[i] && paramsUsed[i] == true) {
			return true;
		}
		else if (currentInput == params[i] && paramsUsed[i] == false) {
			paramsUsed[i] = true;
			return false;
		}
	}
}

//*****************************************************************

// company autocomplete options
var autocomplete1Options = {data: {
	"AAPL": null
	},

	// function to run on autocomplete
	onAutocomplete: function() {
		// console.log("company autocomplete run")
	}

};

// company autocomplete init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete1');
    var instances = M.Autocomplete.init(elems, autocomplete1Options);
  });

//*****************************************************************

var paramCount = 1;

// parameter autocomplete options
var autocomplete2Options = {data: {
	"Param 1": null,
	"Param 2": null,
	"Param 3": null
	},

	// function to run on autocomplete
	onAutocomplete: function() {
		// console.log("param autocomplete run");

		// checking what the current input is
		var currentInput = document.getElementById("paramInput").value;
		// console.log(currentInput)

		// prob call function usedParams(currentInput)
		var paramBeenUsed = usedParams(currentInput);
		// console.log("usedParams returned value");
		// console.log(paramBeenUsed)

		if (paramBeenUsed == true) {
			// console.log("param error");
		}
		else {
			// console.log("param success");
			// the actual code to append in string form
			document.getElementById("paramAppend").innerHTML += 
				"<li id='" + "param" + paramCount + "' class='collection-item' style='overflow: auto; padding-bottom: 20px;'>" + 
					"<div>" + 
						"<form action='#'>" + 
							"<p class='range-field'>" + 
								"<input type='range' id='" + "slider" + paramCount + "' style='width: 75%; float: right;' min='0' max='100' />" + 
							"</p>" + 
						"</form>" + 
						"<p id='" + "selectedParam" + paramCount + "'>" + currentInput + "</p>" +
					"</div>" + 
				"</li>"
			;
			paramCount += 1;
		}
	}
}

// parameter autocomplete init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete2');
    var instances = M.Autocomplete.init(elems, autocomplete2Options);
  });

//*****************************************************************

// select components options
var selectOptions = {};

// select init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, selectOptions);
  });

