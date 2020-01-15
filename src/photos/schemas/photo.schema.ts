import FileModel from "./file.schema";

var config = require("../../config/thinky");
const thinky = require("thinky")(config.rethinkdb);
const type = thinky.type;

const PhotoModel = thinky.createModel('Photo', {
    id: String,
    name: type.string().options({enforce_missing: true}),
    file: type.string().options({enforce_missing: true})
});

PhotoModel.hasOne(FileModel, 'image', 'file', 'id');

export default PhotoModel;