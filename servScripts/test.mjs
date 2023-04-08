import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    res.cookie("top", "sssdsdd").send('cookie set');
    console.log(req.cookies);
}