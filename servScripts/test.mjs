import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    res.cookie("top", "men");
    console.log(req.cookies);
}