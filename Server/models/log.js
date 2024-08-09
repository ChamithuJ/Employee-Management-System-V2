import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

});

const Log = mongoose.model("Log", logSchema);

export default Log;
