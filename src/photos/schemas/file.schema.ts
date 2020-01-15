var config = require("../../config/thinky");
const thinky = require("thinky")(config.rethinkdb);
const type = thinky.type;

export default thinky.createModel('File', {
    id: String,
    file: type.buffer().options({enforce_missing: true})
});