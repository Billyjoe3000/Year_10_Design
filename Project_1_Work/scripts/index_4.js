function test() {
	// console.log(document.getElementById("smallCap").checked); // dom for checkboxes
	// console.log(document.getElementById("presetsSelector").value); // dom for select tags (value defined in the options)
	///console.log(document.getElementById("slider1").value) // dom for slider tags
}
/*
PARAMS TO ADD
- currentRatio
- debtToEquityRatio
- dividendYield
- priceToBookValue
- priceToEarningsRatio
- priceToSalesRatio
- profitMargin

Benchmark Types (what is better?) (add more numbers for more benchmark types)
- 0 (lower) (than the value)
- 1 (higher) (than the value)
//*/

// list all params here as its own object
var params = [
	{
		"name": "Current Ratio",
		"apiName": "currentRatio",
		"benchmarkValue": null,
		"benchmarkType": null,
		"used": false
	},
	{
		"name": "Debt To Equity Ratio",
		"apiName": "currentRatio",
		"benchmarkValue": null,
		"benchmarkType": null,
		"used": false
	},
	{
		"name": "Dividend Yield",
		"apiName": "dividendYield",
		"benchmarkValue": null,
		"benchmarkType": null,
		"used": false
	},
	{
		"name": "Price To Book Value",
		"apiName": "priceToSalesRatio",
		"benchmarkValue": null,
		"benchmarkType": null,
		"used": false
	},
	{
		"name": "Price To Earnings Ratio",
		"apiName": "priceToSalesRatio",
		"benchmarkValue": null,
		"benchmarkType": null,
		"used": false
	},
	{
		"name": "Price To Sales Ratio",
		"apiName": "priceToSalesRatio",
		"benchmarkValue": null,
		"benchmarkType": null,
		"used": false
	},
	{
		"name": "Profit Margin",
		"apiName": "profitMargin",
		"benchmarkValue": null,
		"benchmarkType": null,
		"used": false
	}
];

// creating autocomplete data object with the for loop reading from the main params array (the code is only changed in that 1 array)
var autocomplete2Data = {}
for (i = 0; i < params.length; i++) {
	autocomplete2Data[params[i]["name"]] = null;
}

//*****************************************************************

function main() {
	var requestedParams = []
	var count = 1;

	// reading the params listed
	for (i = 0; i < params.length; i++) {

		console.log(params[i]["used"]);
		var object = {};
		
		// check if it is used
		if (params[i]["used"] == true) {
			
			object["name"] = params[i]["apiName"];
			object["weight"] = document.getElementById("slider" + count).value;
			console.log(object);

			requestedParams.push(object);
			count += 1;
		}
	}
	console.log(requestedParams);

	// fetching API
	var symbol = document.getElementById("companyInput").value;
	var args = "/v2/reference/financials/";
	var apiKey = "8twJeoNW9ilnBJw_2GV1pBB1OZnFFU_p";

	var url = "https://api.polygon.io" + args + symbol + "?apiKey=" + apiKey + "&type=QA&limit=1";
	console.log(url);

	fetch(url) // fetching the data
	.then((resp) => resp.json())
	.then(function data(data) {
		console.log(data);

		// length of the requested params
		for (j = 0; j < requestedParams.length; j++) { 
			// searching for the requested param by key
			if (data["results"]["0"][requestedParams[j]["name"]] != null) {

				console.log(data["results"]["0"][requestedParams[j]["name"]]);
				requestedParams[j]["value"] = data["results"]["0"][requestedParams[j]["name"]]; // adding to the object
			}
		}
		console.log(requestedParams);
	});
}

//*****************************************************************

function grading() {

}

//*****************************************************************

// calculating params that have not been used yet
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
            "presetParams": {0: "Current Ratio", 1: "Dividend Yield", 2: "Profit Margin"},
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
				console.log(objectPush);
			}
		}
	}
	paramsToAdd.push(objectPush);
	console.log("paramsToAdd = " + paramsToAdd);

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
var autocomplete2Options = {data: autocomplete2Data,

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

//*****************************************************************

function reset() {

}

