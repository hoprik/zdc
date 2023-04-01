$(document).ready(function(){
    // $.ajax({
    //     type: "GET",
    //     url: "/php/system_login.php",
    //   }).done(function( data ) {
    //     if (data == 0){
    //     }
    //     if(data == 1){
    //         window.location.href = "/html/news.html"
    //     }
    //   });
    $(".log").on("click", function(){
        var login = $(".login").val();
        var password = $(".password").val();
        if (login == ""){
        }
        else{
            if (password == ""){
            }
            else{
                $.ajax({
                    type: "GET",
                    url: "/php/login.php",
                    data: {user: login, password:password}
                  }).done(function( data ) {
                    if (data == 0){
                        alert("неправильный логин или пароль");
                    }
                    if(data == 1){
                        window.location.href = "/html/news.html"
                    }
                  });
            }
        }
        $(".login").val("")
        $(".password").val("")
            
    });
});