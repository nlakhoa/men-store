
const ListCafe = require('../models/ListCafe');
const ListEspresso = require('../models/ListEspresso');
const ListPhindi = require('../models/ListPhindi');


const {
    MongooseObject,
    mutiMongooseObject
} = require('../util/Mongoose')

class ProductController {
    sanpham(req, res, next) {
        res.render('middlePage/product')
    }
   
    cafe(req,res,next){ 
        Promise.all([ListCafe.find({}),ListPhindi.find({}),ListEspresso.find({})])
            .then(([cafe,phindi,espresso])=>{
                res.render('product/cafe',{cafe : mutiMongooseObject(cafe),phindi:mutiMongooseObject(phindi),espresso:mutiMongooseObject(espresso)})
            })
            .catch(next)
    }
    additem(req,res,next){  
    ListCafe.delete({_id : req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
    cart(req,res,next){ 
    // ListCafe.findDeleted({})
            // .then(() => 
            res.render('product/cars')
            // .catch(next)
        
    }
   

}

module.exports = new ProductController;