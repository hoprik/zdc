var membercount = 2
var member2,member3,member4,member5,member6,member7,member8,member9,member10
$(document).ready(function(){
    $("body").on("click","button.add" ,function(){
        if (membercount != 10){
            membercount += 1
            $(".add").remove()
            $("body").append('<input type="text" class="member'+membercount+'" placeholder="добавить человека">')
            $("body").append('<button class="add">добавить</button>')
        }
        else{
            $(".add").remove()
        }
    })
    $(".create").on("click", function(){
        switch(membercount){
            case 2: 
                member2=$(".member2").val()
                member3 = 0
                member4 = 0
                member5 = 0
                member6 = 0
                member7 = 0
                member8 = 0
                member9 = 0
                member10 = 0
                break;
            case 3: 
                member2=$(".member2").val()
                member3=$(".member3").val()
                member4 = 0
                member5 = 0
                member6 = 0
                member7 = 0
                member8 = 0
                member9 = 0
                member10 = 0
                break;
            case 4: 
                member2=$(".member2").val()
                member3=$(".member3").val()
                member4=$(".member4").val()
                member5 = 0
                member6 = 0
                member7 = 0
                member8 = 0
                member9 = 0
                member10 = 0
                break;
            case 5: 
                member2=$(".member2").val()
                member3=$(".member3").val()
                member4=$(".member4").val()
                member5=$(".member5").val()
                member6 = 0
                member7 = 0
                member8 = 0
                member9 = 0
                member10 = 0
                break;
            case 6: 
                member2=$(".member2").val()
                member3=$(".member3").val()
                member4=$(".member4").val()
                member5=$(".member5").val()
                member6=$(".member6").val()
                member7 = 0
                member8 = 0
                member9 = 0
                member10 = 0
                break;
            case 7: 
                member2=$(".member2").val()
                member3=$(".member3").val()
                member4=$(".member4").val()
                member5=$(".member5").val()
                member6=$(".member6").val()
                member7=$(".member7").val()
                member8 = 0
                member9 = 0
                member10 = 0
                break;
            case 8: 
                member2=$(".member2").val()
                member3=$(".member3").val()
                member4=$(".member4").val()
                member5=$(".member5").val()
                member6=$(".member6").val()
                member7=$(".member7").val()
                member8=$(".member8").val()
                member9 = 0
                member10 = 0
                break;
            case 9: 
                member2=$(".member2").val()
                member3=$(".member3").val()
                member4=$(".member4").val()
                member5=$(".member5").val()
                member6=$(".member6").val()
                member7=$(".member7").val()
                member8=$(".member8").val()
                member9=$(".member9").val()
                member10 = 0
                break;
            case 10: 
                member2=$(".member2").val()
                member3=$(".member3").val()
                member4=$(".member4").val()
                member5=$(".member5").val()
                member6=$(".member6").val()
                member7=$(".member7").val()
                member8=$(".member8").val()
                member9=$(".member9").val()
                member10=$(".member10").val()
                break;
        }
        var name = $(".name").val()
        $.ajax({
            type: "GET",
            url: "/php/create_chat.php",
            data: {name:name, member2:member2, member3:member3, member4:member4, member5:member5, member6:member6, member7:member7, member8:member8, member9:member9, member10:member10}
        }).done(function(){
            window.location.href = "chats.html"
        })
        
    })
})