$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/php/chat_read.php"
    }).done(function(data){
        $(".chat").html(data)
    })

    function reset_chat(){
        $.ajax({
            type: "GET",
            url: "/php/chat_read.php"
        }).done(function(data){
            $(".chat").html(data)
        })
        setTimeout(reset_chat, 1)
    }

    setTimeout(reset_chat, 100)

    $(".message_send").on("click", function(){
        var message = $(".message").val()    
        if(message != ""){
            if(message !=" "){
                $.ajax({
                    type: "GET",
                    url: "/php/chat_send.php",
                    data: {text:message}
                })
            }
        }
        $(".message").val('')
    })
})