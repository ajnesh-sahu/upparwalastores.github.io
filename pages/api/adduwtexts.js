import Uwtext from "../../models/Uwtext"
import connectDb from "../../middleware/mongoose"                                       


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const{uwtitle} = req.body  
        let u = new Uwtext({uwtitle})      
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "the store is already existing" })
    }
}
export default connectDb(handler);