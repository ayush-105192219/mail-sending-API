const path = require('path')
var nodemailer = require('nodemailer')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

const sndmail = (too , txt) => {
let transporter = nodemailer.createTransport({
    service: 'gmail' ,
    secure :false ,
    port : 25,
    auth : {
        user : 'admin@gmail.com',//sender's gmail-id
        pass: 'adminpass****'//sender's gmail-password
         //visit sender's mail id and enable lesssecureapp to access gmail account
        //visit : https://myaccount.google.com/lesssecureapps
    } ,
    tls: {
        rejectUnauthorised : false
    }
})
 
let Ooption ={
    from : ' "Admin" <admin100@gmail.com>' ,  //sender's name and mail id
    to: too , 
    subject : "send from node.js" , 
    text : txt
}

transporter.sendMail(Ooption, (error, info) => { 
    if(data){
        return 'success'
    }
})
}




app.get('' , (req, res) => {
    let info
    if(req.query.address && req.query.body){       
     info = sndmail(req.query.address ,  req.query.body)
     }
    res.send( {
        info
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})