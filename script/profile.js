var data;
$(document).ready(function(){
    data = "name"
    $.ajax({
        type: "GET",
        url: "/php/profile.php",
        data: {data: data}
      }).done(function( data ) {
          $('.name').text(data)
          $('head').append('<title>профиль: '+data+'</title>')
      });
      data = "surname"
      $.ajax({
          type: "GET",
          url: "/php/profile.php",
          data: {data: data}
        }).done(function( data ) {
            $('.surname').text(data)
        });
        data = "status"
        $.ajax({
            type: "GET",
            url: "/php/profile.php",
            data: {data: data}
        }).done(function( data ) {
            $('.status').text(data)
        });
        data = "avatar"
        $.ajax({
            type: "GET",
            url: "/php/profile.php",
            data: {data: data}
          }).done(function( data ) {
              $('body').append('<img src="'+data+'" width="100" height="100">')
          });
})