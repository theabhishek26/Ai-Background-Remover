import { Webhook } from 'svix';
import userModel from '../models/userModels';

const clerkWebhooks=async (req,res)=>{
    try {
        const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
                "svix-id":req.headers['svix-id'],
                "svix-timestamp":req.headers['svix-timestamp'], 
                "svix-signature":req.headers['svix-signature']
            })  
    // If verification is successful, proceed with your logic
        const {data,type}=req.body

        switch (type) {
            case "user.created":{
                const userData={
                    clerkId : data.id,
                    email : data.email_addresses[0].email_address,
                    firstName : data.first_name,
                    lastName : data.last_name,
                    photo : data.image_url
                }
                await userModel.create(userData);
                res.json({})

                break;
            }

            case "user.updated":{
                
                const userData={
                    
                    email : data.email_addresses[0].email_address,
                    firstName : data.first_name,
                    lastName : data.last_name,
                    photo : data.image_url
                }
                await userModel.findOneAndUpdate({clerkId:data.id},userData,)
                res.json({})

                break;
            }
            
            case "user.deleted":{
                await userModel.findOneAndDelete({clerkId:data.id})
                res.json({})
                break;
            }
        
            default:
                break;
        }

    } catch (error) {
        console.error("Webhook verification failed:", error);
        res.json({success:false, message:"Webhook verification failed"})
        return res.status(400).send("Invalid webhook signature");
    }
}

export {clerkWebhooks}