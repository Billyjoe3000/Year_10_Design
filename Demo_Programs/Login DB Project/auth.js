const loginForm = document.querySelector("#loginForm");

const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const learnMoreButton = document.getElementById("learnMoreButton");
const elementsButton = document.getElementById("elementsButton");

var users = ["user1", "user2", "user3"];
var pwords = ["pword1", "pword2", "pword3"];

var cuser = "";

function auth(username, password) {
	/*
	- read info
	- set flag
	- loop through users

	//*/
	console.log("running auth")
	
}

loginForm.addEventListener("submit", (e) => {
	e.preventDefault(); //stop page refresh
	// console.log(e)

	// check user authentication
	var username = loginForm["username"].value;
	var password = loginForm["password"].value;
	//console.log(username)
	//console.log(password)
	var auth = false;
	
	for (i = 0; i < users.length; i++) {
		//console.log(users[i])
		//console.log(pwords[i])
		if (username == users[i] && password == pwords[i]) {
			auth = true;
			break;
		}
	}

	if (auth == true) {
		// edit navbar
		loginButton.style.display = "none"
		logoutButton.style.display = "block"
		learnMoreButton.style.display = "block"
		elementsButton.style.display = "block"

		// manually close modal
		const modal = document.querySelector('#login_modal'); 
		M.Modal.getInstance(modal).close();
		loginForm.reset()

		cuser = users[i];
		console.log(cuser);
	}
	else {
		M.toast({html: 'Username or Password Incorrect'})
	}
	
});

logoutButton.addEventListener("click", (e) => {

	// reset navbar
	loginButton.style.display = "block"
	logoutButton.style.display = "none"
	learnMoreButton.style.display = "none"
	elementsButton.style.display = "none"
});


