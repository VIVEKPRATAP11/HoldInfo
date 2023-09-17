import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
    id : String,
    name : String,
    last : String,
    buy : String,
    sell : String,
    volume : String,
    base_unit : String
})

export const DataModel = mongoose.model("TopTenData", dataSchema)