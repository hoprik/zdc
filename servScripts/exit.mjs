import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    new tool.Cokkies(req, res).setCokkie("id", "")
    new tool.Cokkies(req, res).setCokkie("login", "")
    new tool.Cokkies(req, res).setCokkie("chat", "")
}