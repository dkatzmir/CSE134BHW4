(function() {
  var addButton = document.getElementById('add');
  var saveButton = document.getElementById('save');
  var editButtons = document.getElementsByClassName('edit');
  var deleteButtons = document.getElementsByClassName('delete');
  var deleteButton = document.getElementById("deleteButton")
  var dialog = document.getElementById('dialog');
  var dialogD = document.getElementById('dialogD');
  var list = document.getElementById('list');
  var status = document.getElementById('status');
  var edit = false;
  var node;
  var editRow;
  var editNode;
  var deleteRow;
  var deleteNode;
  var emptyList = false;
  for(var i = 0; i < editButtons.length; i++){
			editButtons[i].addEventListener('click', function() {
			edit = true;
			editRow = this.parentNode.parentNode.parentNode;
	  		editNode = this.parentNode.parentNode;
	  		dialog.showModal();
  			});
  		}
	  
  for(var i = 0; i < deleteButtons.length; i++){
		  	deleteButtons[i].addEventListener('click', function() {
			deleteRow = this.parentNode.parentNode.parentNode;
		  	deleteNode = this.parentNode.parentNode;
		  	dialogD.showModal();
			});
	}
	  	
  addButton.addEventListener('click', function() {
	edit = false;   
	dialog.showModal();
  });
  
  saveButton.addEventListener('click', function() {
	node = document.createElement("TR");
	var title = document.getElementById("title").value;
	var year = document.getElementById("year").value;
	var rating = document.getElementById("rating").value;
	title = DOMPurify.sanitize(title);
	year = DOMPurify.sanitize(year);
	rating = DOMPurify.sanitize(rating);
	document.getElementById("title").value = "";
	document.getElementById("year").value = "";
	document.getElementById("rating").value = "G";
	node.innerHTML = '<tr><td>'+title +'</td><td style="text-align: center">'+year+'</td><td style="text-align: center">'+rating+'</td><td style="text-align: center"><image src="edit.png" style="height:25px; vertical-align: middle;" class="edit"></image></td><td style="text-align: center"><image src="trash.png" style="height:25px; vertical-align: middle;" class="delete"></image></td></tr>';
	if(title!="" && rating!="" && year!="")
	{
		if(emptyList)
		{
			emptyList=false;
			edit=false;
			status.innerHTML = '<image src="add.png" style="height:25px; vertical-align: middle;" id="add"><b>Add Movie</b></image></div><script src="stylecrud.js">';
			addButton = document.getElementById('add');
		}
		if(edit)
		{
			editNode.innerHTML = node.innerHTML;
		}	
		else
			list.appendChild(node);
			
		editButtons = document.getElementsByClassName('edit');
		deleteButtons = document.getElementsByClassName('delete');
		for(var i = 0; i < editButtons.length; i++){
			editButtons[i].addEventListener('click', function() {
			edit = true;
	  		editRow = this.parentNode.parentNode.parentNode;
	  		editNode = this.parentNode.parentNode;
	  		dialog.showModal();
  			});
  		}
	  
  		for(var i = 0; i < deleteButtons.length; i++){
		  	deleteButtons[i].addEventListener('click', function() {
			deleteRow = this.parentNode.parentNode.parentNode;
		  	deleteNode=this.parentNode.parentNode;
		  	dialogD.showModal();
		  	});
	  	}
	  	document.getElementsByTagName("style")[0].innerHTML="html {font-family: monospace; background-color: #f1fff5}tr:nth-child(odd) {background-color: #f2f2f2;}tr:nth-child(even){background-color: white;}dialog {border-radius:25px; border-color: gray;}";
	}
		
  });
  
  
  
  deleteButton.addEventListener('click', function(){
	  
	  	deleteRow.removeChild(deleteNode);
	  	if(document.getElementsByTagName("TR").length==1)
	  	{
		  	status.color = 'red';
		  	status.innerHTML = '<image src="add.png" style="height:25px; vertical-align: middle;" id="add"><b style="color:red;">No Movies Currently Listed</b></image>'
		  	emptyList=true;
		  	addButton = document.getElementById('add');
		  	addButton.addEventListener('click', function() {
		  		edit = false;   
		  		dialog.showModal();
  			});
	  	}
  	
  });
  
  
})();