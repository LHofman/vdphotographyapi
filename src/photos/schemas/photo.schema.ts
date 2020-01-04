var config = require("../../config/thinky");
const thinky = require("thinky")(config.rethinkdb);
const type = thinky.type;

export default thinky.createModel('Photo', {
    id: String,
    name: type.string().options({enforce_missing: true}),
    file: type.string().options({enforce_missing: true})
});