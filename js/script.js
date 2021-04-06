function init(){
//add your javascript between these two lines of code

  function myFunction(){
	var tb = document.getElementById("entryinput");
    alert("Dylan Baltrus: " + tb.value);
    
  }
 
  var b1 = document.getElementById("entrybutton");
  
  b1.addEventListener('click', myFunction);

}




window.addEventListener('load', init);