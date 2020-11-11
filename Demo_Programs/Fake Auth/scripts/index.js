var uNames = ["user1@test.com","user2@test.com"];
var pWords = ["pword1","pword2"];

function checkCred(u,p) {

	// loops through uNames
	for (i = 0; i < uNames.length; i = i + 1) {
		console.log(uNames[i]);

		// checks if username exists in the list uNames
		if (uNames[i] === u) {

			// checks if password corresponds
			if (pWords[i] === p) {
				return true;
			}
		}
	}
	return false; // username or password incorrect
}

console.log(checkCred("user1@test.com","1234"))