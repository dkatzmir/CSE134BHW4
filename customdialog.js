(function() {
  var alertButton = document.getElementById('alert');
  var confirmButton = document.getElementById('confirm');
  var promptButton = document.getElementById('prompt');
  var dialog = document.getElementById('dialog');
  var formData = document.getElementById('dialogInner');
  var output = document.getElementById("output");
  var table = document.getElementById("table");
  var endButtons = document.getElementsByClassName("end");
  var textFieldValue;
  var returnVal;
  
  
  
  alertButton.addEventListener('click', function() {
	formData.innerHTML = "<p><label>Alert Pressed!</label></p><menu><button class='end'>Ok</button></menu>";
	endButtons = document.getElementsByClassName("end");
	dialog.showModal();
	for(var i = 0; i < endButtons.length; i++) {
       	endButtons[i].addEventListener("click", function(){
	   	output.innerHTML = "";
		table.style.border = "0"
       });
 	}
  });
  
  confirmButton.addEventListener('click', function() {
	output.innerHTML = "";
	table.style.border = "0"
	formData.innerHTML = "<p><label>Do you confirm this?</label></p><menu><button value='false' class='end'>Cancel</button><button value='true' class='end'>Ok</button></menu>";
	dialog.showModal();
	for(var i = 0; i < endButtons.length; i++) {
       	endButtons[i].addEventListener("click", function(){
	       	setTimeout(function(){output.innerHTML = "Confirm Result : " + dialog.returnValue; 
		table.style.border = "3px double black";}, 500)
		
       });
 	}
  });
  

  promptButton.addEventListener('click', function() {
	output.innerHTML = "";
	table.style.border = "0"
	formData.innerHTML ="<form><label>What is your name?</label><input type='text' id='field'><br></input><button value='cancel' class='end'>Cancel</button><button value='ok' class='end'>Ok</button></form>";
	dialog.showModal()
	for(var i = 0; i < endButtons.length; i++) {
       	endButtons[i].addEventListener("click", function(){
	       	setTimeout(function(){textFieldValue = document.getElementById("field").value;
		returnVal = dialog.returnValue;
		if(returnVal === 'cancel' || returnVal=="")
			textFieldValue = "User didn't enter anything"
		textFieldValue = DOMPurify.sanitize(textFieldValue);
		output.innerHTML = "Prompt Result : " + textFieldValue; 
		table.style.border = "3px double black";}, 500)
       });
 	}
  });
  
})();