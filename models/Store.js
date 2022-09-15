const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeimg: { type:String,require: true},
    storelink: { type:String,required: true},
    storename: { type: String, required: true },
    phone: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: {type: String, default:''},
    pincode: {type: Number, default:''},
    storeid: {type: String, unique: true}
});

// mongoose.models = {};

// export default mongoose.model("User", UserSchema);
mongoose.models = {}

export default mongoose.model("Store", StoreSchema);