const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');


const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)



const Nguoimua = new Schema({
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
    password: {
        type: String,
        require: true
    }

}, {

    timestamps: true
});




var mongoose_delete = require('mongoose-delete');
Nguoimua.plugin(mongoose_delete);
Nguoimua.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('Nguoimua', Nguoimua, 'nguoimua');