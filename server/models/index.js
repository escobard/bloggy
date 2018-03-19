const mongoose = require("mongoose")

require("./Users")

const mongoURI = require("../constants/config").mongoURI

mongoose.connect(mongoURI)

module.exports = mongoose
