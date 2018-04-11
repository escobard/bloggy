const mongoose = require("mongoose")

require("./Users")
require("./Jobs")

const mongoURI = require("../constants/config").mongoURI

// connects to mlab with the URI defined in the config file
mongoose.connect(mongoURI)

module.exports = mongoose
