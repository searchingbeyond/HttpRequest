function requestPost(url,data){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if ( xhr.readyState == 4 && xhr.status == 200 ){
             
        }
    }
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
}

function requestGet(url,data){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if ( xhr.readyState == 4 && xhr.status == 200 ){
             
        }
    }
    xhr.open("GET",url+"?"+data,true);
    xhr.send();
}

function appendAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if( parent.lastChild == targetElement ){
        parent.appendChild( newElement );
    } else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}


function bindSubmit(){
    var submit = document.getElementById("submit");
	var button = submit.getElementsByTagName("button");
	var length = button.length;
	for (var i = 0; i < length; i++) {
		button[i].onclick = function(){
            var input_k = document.getElementsByClassName("input_k");
            var input_v = document.getElementsByClassName("input_v");
            var length = input_v.length;
            var data = "";
            var i = 1;
            var url = input_v[0].value;
            for (i = 1; i < length; i++) {
                var k = input_k[i].value;
                var v = input_v[i].value;
                if( v && !k){
                    alert( v + "的键不能为空");
                    return false;
                }
                if( k ){
                    if( i == length-1 || ! input_k[i+1].value ){
                        data += k + "=" + v;
                    } else{
                        data += k + "=" + v + "&";
                    }
                }
            }
            //alert(data);
			var type = this.innerHTML.toUpperCase();	
			type == "POST" ? requestPost(url,data) : requestGet(url,data);
		}
	}
}

function newElement(tagName,type_="",class_="",name_="",text_=""){
    var element = document.createElement(tagName);
    element.setAttribute("class",class_);
    element.setAttribute("name",name_);
    if( tagName == "input" ){
        element.setAttribute("type",type_);
    }
    element.innerHTML = text_;
    return element;
}

function addInput(){
    var action = document.getElementsByClassName("action");
    var length = action.length;
    for (var i = 0; i < length; i++) {
        action[i].onclick = function(){
            var type = this.innerHTML;
            var tmp = this.parentNode.parentNode;
            if( type == "-"){
                tmp.parentNode.removeChild(tmp);
            } else {
                var tr = newElement("tr");
                var td_1 = newElement("td");
                var td_2 = newElement("td");
                var td_3 = newElement("td");
                var input_k = newElement("input","text","input_k");
                var input_v = newElement("input","text","input_v");
                var button = newElement("button","","action","","+");
                button.onclick = addInput;
                td_1.appendChild(input_k);
                td_2.appendChild(input_v);
                td_3.appendChild(button);
                tr.appendChild(td_1);
                tr.appendChild(td_2);
                tr.appendChild(td_3);
                this.innerHTML = "-";
                tmp.parentNode.appendChild(tr);
            }
        }
    }
}



addLoadEvent(bindSubmit);
addLoadEvent(addInput);
