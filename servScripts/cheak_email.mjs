import * as tool from "./modul/serverTool.mjs"

export function repo(req, res){
  const db = new tool.DB()

  db.getFromDBByAttribute("users", `login=${req.query["email"]}`).then(user=>{
    if (user[0].length == 0){
      res.send({rep:1})
    }
    else {
      res.send({rep:0})
    }
  })
}