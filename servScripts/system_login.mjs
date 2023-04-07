export function repo(req, res){
    if (req.cookies["id"] != (undefined || null)){
        if (req.cookies["login"] != (undefined || null)){
            res.send("1");
        }
        else{
            res.send("0");
        }
    }
    else{
        res.send("0");
    }
}