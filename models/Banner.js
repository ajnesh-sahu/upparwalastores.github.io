const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    bannerimg: { type:String,require: true},
    bannerimgmd: { type:String,require: true}

});

// mongoose.models = {};

// export default mongoose.model("User", UserSchema);
mongoose.models = {}

export default mongoose.model("Banner", BannerSchema);