let express = require('express')
let routes = require('./routes/routes.js')
let path = require('path')

let app = express()

app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))

app.use('/api', routes)

//server creation
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})