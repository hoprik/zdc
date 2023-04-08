let a = "her"

console.log(`i'm ${a}`);

$.ajax({
    type: "GET",
    url: "/servScripts/chats.mjs",
    data: {id:"naa"}
  }).done(function( data ) {
    console.log(data);
  });
