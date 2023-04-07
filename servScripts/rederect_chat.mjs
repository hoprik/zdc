import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
    const id = tool.getParm(req, "id")
    new tool.Cokkies(req, res).setCokkie("chat", id)
}