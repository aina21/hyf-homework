
function func(){
var checkbox= document.getElementById('signup__shipping');
if(checkbox.checked){
    var shipping= document.getElementsByClassName('shipping');
    var shipping__form= document.getElementsByClassName('shipping__form');
    shipping__form.style.visibility=visible;
    for(var i=1; i<=5; i++)
    {
    shipping[i].type ='text';
    }
  }
  if(!checkbox.checked ){
    var shipping= document.getElementsByClassName('shipping');
    for(var i=1; i<=5; i++)
    {
    shipping[i].type ='hidden';
    }
  }
}
