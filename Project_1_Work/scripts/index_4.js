/*
Questions:
- How to source a large array in a js file, don't want a giant list of stocks for the autocomplete
- 
*/

function test() {
	// console.log(document.getElementById("smallCap").checked); // dom for checkboxes
	// console.log(document.getElementById("presetsSelector").value); // dom for select tags (value defined in the options)
	// console.log(document.getElementById("slider1").value) //. dom for slider tags

}

//*****************************************************************

function main() {

}

//*****************************************************************

// function for api call
function fetchAPI() {

	var symbol = "";
	var args = "/v2/reference/tickers" + symbol;
	var params = "";


	var apiKey = "8twJeoNW9ilnBJw_2GV1pBB1OZnFFU_p";
	var url = "https://api.polygon.io" + args + "?apiKey=" + apiKey + params;
	console.log(url);

	fetch(url) // fetching the data
	.then((resp) => resp.json())
	.then(function data(data) {
		console.log(data) // output of data

	});
}

//*****************************************************************

function grading() {

}

//*****************************************************************

// calculating params that have not been used yet
var params = [
	{
		"name": "Param 1",
		"apiName": "Param1ApiName",
		"used": false
	},
	{
		"name": "Param 2",
		"apiName": "Param1ApiName",
		"used": false
	},
	{
		"name": "Param 3",
		"apiName": "Param1ApiName",
		"used": false
	}
];

function usedParams(currentInput) {
	// console.log("usedParams running")
	// console.log(params[0]["name"])

	for (i = 0; i < params.length; i++) {

		if (currentInput == params[i]["name"] && params[i]["used"] == true) {
			// console.log("fail")
			return true;
		}
		else if (currentInput == params[i]["name"] && params[i]["used"] == false) {
			// console.log("success")
			params[i]["used"] = true;
			return false;
		}
	}
}

//*****************************************************************

// adding a param to the param table (the collection)
var paramCount = 1;

function appendParam(input) {

	if (usedParams(input) == true) {
			console.log("param error");
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
					"<p id='" + "selectedParam" + paramCount + "'>" + input + "</p>" +
				"</div>" + 
			"</li>"
		;
		paramCount += 1;
	}
}

//*****************************************************************

// programming in all of the presets in this function (this array is for storing the presets)
var presets = [
          {
          	// presets identified by index in the array which match the option value in <option value="">
            "presetParams": {0: "Param 1", 1: "Param 2", 2: "Param 3"},
            "weight": {0: 50, 1: 50, 2: 50}
          },
          {
            "presetParams": {0: "Param 4", 1: "Param 5", 2: "Param 6"},
            "weight": {0: 50, 1: 50, 2: 50}
          }
        ];

var paramsToAdd = []

// triggers on update button
function presetsUpdate() {
	// console.log("presets update");
	var objectPush = {}

	// first thing is to get the value of the chosen preset
	var selection = document.getElementById("presetsSelector").value;
	console.log(selection);
	console.log(Object.keys(presets[selection]["presetParams"]).length) // finding length of object is slightly different than an array

	// loop through the chosen preset
	for (i = 0; i < Object.keys(presets[selection]["presetParams"]).length; i++) {

		// loop through params every time to search for match
		for (j = 0; j < params.length; j++) {
			if (presets[selection]["presetParams"][i] == params[j]["name"]) {

				// creating the object
				objectPush[params[j]["name"]] = presets[selection]["weight"][i];
			}
		}
	}
	paramsToAdd.push(objectPush);
	console.log(paramsToAdd);

	// add the section innerHTML and adds the params to 
}

//*****************************************************************

// company autocomplete options
var autocomplete1Options = {data: {
	"AAPL": null
	},

	// function to run on autocomplete
	onAutocomplete: function() {
		console.log("company autocomplete run")
	}

};

// company autocomplete init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete1');
    var instances = M.Autocomplete.init(elems, autocomplete1Options);
  });

//*****************************************************************

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
		appendParam(currentInput);
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

