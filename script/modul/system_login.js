$.ajax({
    type: "GET",
    url: "/php/system_login.php",
  }).done(function( data ) {
    if (data == 0){
        window.location.href = "/html/login.html"
    }
    if(data == 1){
    }
  });