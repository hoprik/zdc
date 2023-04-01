$.ajax({
    type: "GET",
    url: "/php/test.js",
  }).done(function( data ) {
    console.log(data);
  });