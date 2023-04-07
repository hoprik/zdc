import {ajax} from "./ajax.mjs"

ajax("/servScripts/system_login.mjs", "GET").then(data=>{
    if (data["response"] == 0){
       window.location.href = "/html/login.html"
       console.log("хуй тебе, а не вход");
    }
    if(data["response"] == 1){
    }
});