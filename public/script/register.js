var name
var sb_name
var login
var password
var re_password
var key
var random = Math.random() * 1000000
random_key = Math.round(random)
var state = 1;

$(document).ready(function(){
    $(".continued").on("click",function(){

        if (state == 1){
            login = $('.login').val()
            sb_name = $('.sbname').val()
            name = $('.name').val()

            if(login == ''){
            }
            else{
                if(name == ''){
                }
                else{
                    if(sb_name == ''){
                    }
                    else{
                        $.ajax({
                            type: "GET",
                            url: "/php/cheak_email.php",
                            data: {email:login}
                          }).done(function( data ) {
                            if (data == 0){
                                alert("такое email уже есть");
                            }
                            if(data == 1){
                                $("input").remove()
                                $("body").append('<input type="password" class="password" placeholder="пароль">')
                                $("body").append('<input type="password" class="re_password" placeholder="потверждения пароля">')
                                $("body").append('<input type="text" class="key" placeholder="код с почты">')
                                $.ajax({
                                    type: "GET",
                                    url: "/php/mail.php",
                                    data: {password:random_key, email:login, name:name}
                                })
                                state += 1;
                            }
                          });
                    }
                }
            }
        }
        if (state == 2){
            password = $(".password").val()
            re_password = $(".re_password").val()
            key = $(".key").val()

            if(password == ''){
            }
            else{
                if(re_password == ''){
                }
                else{
                    if (random_key == key){
                        $.ajax({
                            type: "GET",
                            url: "/php/register.php",
                            data: {email:login, password:password, name:name, surname:sb_name}
                        })
                        window.location.href = "/html/login.html"
                    }
                }
            }
        }
    })
})