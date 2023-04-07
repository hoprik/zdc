let a = "her"

console.log(`i'm ${a}`);

$.ajax({
    type: "GET",
    url: "/servScripts/test.mjs",
    data: {id:"naa"}
  }).done(function( data ) {
    console.log(data);
  });
