const mongoose = require('mongoose');

const UwtextSchema = new mongoose.Schema({
uwtitle: { type:String,require: true}

});

// mongoose.models = {};

// export default mongoose.model("User", UserSchema);
mongoose.models = {};

export default mongoose.model("Uwtext", UwtextSchema);