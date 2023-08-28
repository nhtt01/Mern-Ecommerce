const UserRouter = require('./RouterUser')
const routes = (app)=>{
app.use('/api/user',UserRouter)
}

module.exports = routes;