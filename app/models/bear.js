var mongoose     = require('mongoose');
var MongooSchema       = mongoose.Schema;

var BearSchema   = new MongooSchema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('Bear', BearSchema);