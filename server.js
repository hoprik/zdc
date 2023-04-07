const express = require('express')
var cookieParser = require('cookie-parser');
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(cookieParser());

async function ajaxCLIENT(url, req, res){
    const myModule = await import('.'+url).then((e)=>{
        e.repo(req,res)
    }).catch(e=>{
    });
    
}

app.get("*", (req, res)=>{
    const url = req.originalUrl;
    if (url == "/"){
    res.sendFile(__dirname+"\\index.html");
    }
    if (url.search("servScripts") != -1){
        // res.cookie("hoprik", null)
        // console.log(req.cookies);
        ajaxCLIENT(url, req, res)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
