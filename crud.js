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
  var editNode;
  var deleteNode;
  var emptyList = false;
  
  for(var i = 0; i < editButtons.length; i++){
			editButtons[i].addEventListener('click', function() {
			edit = true;
	  		editNode = this.parentNode;
	  		dialog.showModal();
  			});
  		}
	  
  for(var i = 0; i < deleteButtons.length; i++){
		  	deleteButtons[i].addEventListener('click', function() {
		  	deleteNode=this.parentNode;
		  	dialogD.showModal();
			});
	}
	  	
  addButton.addEventListener('click', function() {
	edit = false;   
	dialog.showModal();
  });
  
  saveButton.addEventListener('click', function() {
	node = document.createElement("LI");
	var title = document.getElementById("title").value;
	var year = document.getElementById("year").value;
	var rating = document.getElementById("rating").value;
	title = DOMPurify.sanitize(title);
	year = DOMPurify.sanitize(year);
	rating = DOMPurify.sanitize(rating);
	node.innerHTML = title + "(" + year + ") - Rated: " + rating + '<x class = "edit"> Edit </x><x class="delete">Delete</x>';
	if(title!="" && rating!="" && year!="")
	{
		if(emptyList)
		{
			emptyList=false;
			edit=false;
			status.innerHTML = '<button id="add">Add Movie</button>'
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
	  		editNode = this.parentNode;
	  		dialog.showModal();
  			});
  		}
	  
  		for(var i = 0; i < deleteButtons.length; i++){
		  	deleteButtons[i].addEventListener('click', function() {
		  	deleteNode=this.parentNode;
		  	dialogD.showModal();
		  	});
	  	}
	}
		
  });
  
  
  
  deleteButton.addEventListener('click', function(){
	  
	  	list.removeChild(deleteNode);
	  	if(document.getElementsByTagName("LI").length==0)
	  	{
		  	status.innerHTML = 'No movies currently listed <button id="add">Add Movie</button>'
		  	emptyList=true;
		  	addButton = document.getElementById('add');
		  	addButton.addEventListener('click', function() {
		  		edit = false;   
		  		dialog.showModal();
  			});
	  	}
  	
  });
  
  
})();