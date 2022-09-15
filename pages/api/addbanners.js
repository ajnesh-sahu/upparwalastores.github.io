import Banner from "../../models/Banner"
import connectDb from "../../middleware/mongoose"                                       


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const{bannerimg,bannerimgmd} = req.body  
        let u = new Banner({bannerimg,bannerimgmd})      
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "the store is already existing" })
    }
}
export default connectDb(handler);