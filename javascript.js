
  function change() { 
    console.log("change");
    if(window.location.pathname == '/') {
      console.log("if");
      document.body.classList.add("principal-page");
    } else {
      console.log("else");
      document.body.classList.remove("principal-page");
    }
  }

