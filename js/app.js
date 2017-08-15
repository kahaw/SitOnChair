document.addEventListener("DOMContentLoaded",function(){

  var check=document.querySelector("#check");
  check.addEventListener("click",function(e){
    if (check.checked) {
      document.querySelector('[type="submit"]').style.backgroundColor="#53C67F";
      document.querySelector('[type="submit"]').style.color="#FFFFFF";
    }
    else {
      document.querySelector('[type="submit"]').style.backgroundColor="grey";
      document.querySelector('[type="submit"]').style.color="#000000";
      document.querySelector('[type="submit"]').disabled;
    }
  });

  var list=document.querySelector('#list');
  var child=list.children[1];

  list.addEventListener("mouseover",function(){
    child.style.display="block";
  });

  list.addEventListener("mouseout",function(){
    child.style.display="none";
  });




});
