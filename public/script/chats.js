$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/php/chats.php"
    }).done(function(data){
        $("body").append("<ul>"+data+"</ul>")
    })

    $(document).on("click", function(e){
        var chat_id = $(e.target).attr("class");
        if (typeof chat_id !== 'undefined') {
            $.ajax({
                type: "GET",
                url: "/php/rederect_chat.php",
                data: {id:chat_id}
            }).done(function(data){
                window.location.href = "/html/message.html"
            })
        }
        else{

        }
    });
})