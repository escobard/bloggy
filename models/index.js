const mongoose = require("mongoose")

require("./Users")
require("./Jobs")

const mongoURI = require("../constants/config").mongoURI

mongoose.connect(mongoURI)

module.exports = mongoose
