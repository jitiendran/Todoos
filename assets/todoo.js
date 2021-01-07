var count = 0;
var tasks;
window.onload = function(){
    document.getElementById("loading").style.display = "block";
    // document.getElementById("web").style.display = "none";
    setTimeout(removeloader,2000);
}
function removeloader(){
    document.getElementById("loading").style.display = "none";
    document.getElementById("main").style.display = "block";
}
// function pushRules(list){
//     count += 1;
//     var w1 = document.getElementById('title1').value;
//     tasks = document.getElementById('title1').value;
//     var w =  count+'.  '+w1;
//     var li = document.createElement("li");
//     var p = document.createElement("p");
//     p = document.createTextNode(w);
//     // p.style.fontWeight = "600";    
//     li.appendChild(p);
//     var removeBtn = document.createElement("input");
//     removeBtn.type = "button";
//     removeBtn.value = "X";
//     removeBtn.onclick = remove;
//     removeBtn.style.color = "black";
//     removeBtn.style.backgroundColor = "orange";
//     removeBtn.style.border = "none";
//     removeBtn.style.outline = "none";
//     removeBtn.style.borderRadius = ".2rem";
//     removeBtn.style.fontSize = "1.2rem";
//     removeBtn.style.fontWeight = "600";
//     removeBtn.style.marginLeft = "2rem";
//     removeBtn.style.cursor = "pointer";
//     removeBtn.style.float = "right";
//     li.appendChild(removeBtn);
//     document.getElementById("list").style.display = "block";
//     document.getElementById("list").appendChild(li);
//     document.getElementById("title1").value = "";
// }
function remove(e) {
  var el = e.target;
  el.parentNode.remove();
}
function print(){
    document.getElementById("print").style.display = "block";
    document.getElementById("first").style.display = "none";
    document.getElementById("display").style.display = "none";
    document.getElementById("list").style.display = "block";
}
function dropdown(){
    document.getElementById("drop").classList.toggle("dropdown-container1");
    document.getElementById("up").classList.toggle("up1");  
}

