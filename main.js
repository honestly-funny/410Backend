window.onload = function($event) {
	console.log("CHROME EXTENSION IS WORKING");
	//createRequest();


	/* Add button */
	var panel = document.querySelector("._3E6INjIzonJwM0r4N1QJYK.b5fwpr-7.ghqtpk");
	console.log(panel);

	if (panel) {
		var call_button = document.createElement("button");
		call_button.innerText = "Analyze";
		panel.appendChild(call_button);
		call_button.addEventListener("click", function() {
			createRequest();
		});
	}
}


createRequest = function() {
	var input_parameter = "maula";
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", "https://cs410-python.herokuapp.com/api/" + input_parameter);
	oReq.send();	
}

function reqListener () {
  console.log("Response from backend received", this.responseText);
}