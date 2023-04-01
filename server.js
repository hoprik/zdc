const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get("*", (req, res)=>{
    const url = req.originalUrl;
    console.log(req.hostname+url);
    if (url == "/"){
    res.sendFile(__dirname+"\\index.html");
    }
    else{
        import(req.hostname+":"+port+url)
        .then(e=>{
            let {repo} = import(req.hostname+url);
            repo(req, res)})
        .catch(err => {
            console.log(err);
        })
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
