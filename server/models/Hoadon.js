const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');


const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)



const Hoadon = new Schema({
    idthietbi: {
        type: String,
        require: true
    },
    idnguoimua: {
        type: String,
        require: true
    },
    idnguoiban: {
        type: String,
        require: true
    },
    ngayban: {
        type: String
    },
 
    hanbaohanh: {
        type: String
    },


}, {

    timestamps: true
});




var mongoose_delete = require('mongoose-delete');
Hoadon.plugin(mongoose_delete);
Hoadon.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('Hoadon', Hoadon, 'hoadon');