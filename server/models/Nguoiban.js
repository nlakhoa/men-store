const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');


const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)



const Nguoiban = new Schema({
    name: {
        type: String
    },
    sdt: {
        type: String
    },
    email: {
        type: String,
        require: true
    },

}, {

    timestamps: true
});




var mongoose_delete = require('mongoose-delete');
Nguoiban.plugin(mongoose_delete);
Nguoiban.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('Nguoiban', Nguoiban, 'nguoiban');