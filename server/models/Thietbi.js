const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');


const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)



const Thietbi = new Schema({
    mamay: {
        type: String
    },
    name: {
        type: String
    }
    

}, {

    timestamps: true
});




var mongoose_delete = require('mongoose-delete');
Thietbi.plugin(mongoose_delete);
Thietbi.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('Thietbi', Thietbi, 'thietbi');