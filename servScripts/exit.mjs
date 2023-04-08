import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    res.clearCookie("id")
    res.clearCookie("login")
    res.clearCookie("chat")
}