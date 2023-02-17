const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');


const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)



const Dangkysuachua = new Schema({
    idthietbi: {
        type: String,
        require: true
    },
    idnguoimua: {
        type: String,
        require: true
    },
    tinhtrangloi: {
        type: String,
        require: true
    },
    idhoadon: {
        type: String
    },

}, {

    timestamps: true
});




var mongoose_delete = require('mongoose-delete');
Dangkysuachua.plugin(mongoose_delete);
Dangkysuachua.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('Dangkysuachua', Dangkysuachua, 'dangkysuachua');