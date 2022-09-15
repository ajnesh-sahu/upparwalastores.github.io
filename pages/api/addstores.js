import Store from "../../models/Store"
import connectDb from "../../middleware/mongoose"                                       


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const{storename,pincode,storeid,name,phone,email,address,storelink,storeimg} = req.body  
        let u = new Store({storename,name,phone,email,address,pincode,storeid,storelink,storeimg})      
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "the store is already existing" })
    }
}
export default connectDb(handler);