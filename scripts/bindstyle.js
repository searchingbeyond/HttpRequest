function bindInputStyle(){
	var tr = document.getElementsByTagName("tr");
	var length = tr.length;
	for (var i = 0; i < length; i++) {
		var input = tr[i].getElementsByTagName("input");
		input[0].setAttribute("class","input_k");
		input[1].setAttribute("class","input_v");	
	}
}

function bindButtonStyle(){
	var submit = document.getElementById("submit");
	var button = submit.getElementsByTagName("button");
	var length = button.length;
	for (var i = 0; i < length; i++) {
		button[i].setAttribute("class","border");
	}
}

function addLoadEvent(func){
	var oldload = window.onload;
	if ( typeof window.onload != "function"){
		window.onload = func;
	} else {
		window.onload = function(){
			oldload();
			func();
		}
	}
}

addLoadEvent(bindButtonStyle);
addLoadEvent(bindInputStyle);