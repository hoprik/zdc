import mysql from "mysql2/promise"

export class DB{
  con = null
  constructor(){
    this.con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "manager",
        database: "messanger"
      });
  }

  async getFromDB(table) { 
    let result;
    await this.con.then(conn=>{
      const res = conn.query(`SELECT * FROM ${table}`)
      result = res;
    })
    return result
  }

  async getFromDBByAttribute(table, attribute) {     
    let result;
    await this.con.then(conn=>{
      const res = conn.query(`SELECT * FROM ${table} WHERE ${attribute}`)
      result = res;
    })
    return result
  }
//`INSERT INTO customers (${colums}) VALUES (${colums_data})`
//`SELECT * FROM ${table} WHERE ${attribute}`
  async insertToDB(table, colums, colums_data) {     
    let result;
    await this.con.then(conn=>{
      const res = conn.query(`INSERT INTO ${table} (${colums}) VALUES (${colums_data})`)
      result = res;
    })
    return result
  }
}

export function getParm(req, item) {
  const url = req.originalUrl.split("?")
  const parms = url[1].split("&")
  let data;
  parms.forEach(parm => {
    const parmItem = parm.split("=")
    if (parmItem[0] == item){
      data = parmItem[1]
    }
  });
  return data;
}

export class Cokkies{
  req;
  res;
  constructor(req,res){
    this.req = req;
    this.res = res;
  }

  getCokkie(name){
    return this.req.cokkies[name]
  }

  getCokkies(){
    return this.req.cokkies
  }

  setCokkie(name, item){
    this.res.cokkie(name, item)
  }

  setCokkieTime(name, item, seconds){
    this.res.cokkie(name, item, {maxAge: seconds*10})
  }
}

// export class Mail{
//   transporter;
//   constructor(){
//     this.transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: "zedrichatmes@gmail.com", // generated ethereal user
//         pass: "ctekgcwmrntybeuz", // generated ethereal password
//       },
//     });
//   }

//   send(){
//     let info = this.transporter.sendMail({
//       from: '"Жедрик" <zedrichatmes@gmail.com>', // sender address
//       to: "42morozov42@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
//     info.catch(e=>{
//       console.log(e);
//     })
//   }
// }