require('dotenv').config();
const {google} =require("googleapis");
const SG=require('@sendgrid/mail');
const express =require("express");
const {randomBytes}=require('crypto')
const range='Sheet1!A1:I1'


SG.setApiKey(process.env.SENDGRID_API_KEY);

const write=async (values)=>{
    const auth=await google.auth.getClient({scopes:['https://www.googleapis.com/auth/spreadsheets']});
    const sheet=google.sheets({version:"v4",auth});
    let res = await sheet.spreadsheets.values.append(
        {
            spreadsheetId:process.env.SHEET,
            range,
            valueInputOption:'RAW',
            resource:{values}
        });
}


const app=express();
app.listen(8080);
app.use(express.json());

app.post('/reg',(req,res)=>{
    let {firstName,lastName,email,phone,gender,dateOfBirth,address}=req.body;
    let uid=randomBytes(20).toString('base64');
    write([[uid,firstName,lastName,email,phone,gender,dateOfBirth,address,"Not Paid",'NULL']]);
    SG.send({
        // to:{
        //     email,
        //     name:firstName,
        // },
        // from:{
        //     email:process.env.EMAIL,
        //     name:"REG"
        // },
        from:process.env.EMAIL,
        to:email,
        subject:"Registration Completed",
        templateId:"d-85845ea22e554fe7bf7efeeb72e9ded6",
        dynamicTemplateData:{
            name:firstName,
        }
    }).then(()=>{
        console.log("DONE !");
        res.json({error:false,uid});
    });
});
