$('document').ready(function(){
  
  window.onhashchange = function() { 
    if(window.location.pathname == '/') {
      var body = document.body;
      body.classList.add("principal-page");
    } else {
      body.classList.remove("principal-page");
    }
  }
});

