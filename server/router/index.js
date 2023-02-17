
const homeRouter = require('./homeRouter')


function route(app) {
    app.use('/', homeRouter)
    
}

module.exports = route;