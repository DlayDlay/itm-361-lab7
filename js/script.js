function init(){
//add your javascript between these two lines of code

  function myFunction(){
	var tbox = document.getElementById("entryinput");
	var output = document.getElementById("textoutput");
    alert("Dylan Baltrus: " + tbox.value);
    output.innerHTML = tbox.value;
  }
 
  var b1 = document.getElementById("entrybutton");
  
  b1.addEventListener('click', myFunction);

}

window.addEventListener('load', init);