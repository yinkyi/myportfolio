import {SMTPClient} from 'emailjs';
const handler=async (req,res)=>{
    const {name,email,subject,bodyMessage} = req.body;
    const client = new SMTPClient({
        user:'fullstackdev.ygn2024@gmail.com',
        password:'fmekhcwgmtgczvii',
        host:'smtp.gmail.com',
        ssl:true
    })
try{
    const send =  await client.sendAsync({
        text:`${bodyMessage} \n This message is sent by ${name}.`,
        from:email,
        to:'yinyinkyi90@gmail.com',
        subject:subject
    })
    }catch(e){
        res.status(400).end(JSON.stringify({result:0,message:e}))
        return;
    }
    
    res.status(200).end(JSON.stringify({result:1,message:'Send Mail'}));
}
export default handler;