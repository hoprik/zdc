import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const id = req.query["id"]
    res.setCokkie("chat", id).send("cokkie set");
}