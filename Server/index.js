const express = require('express')
const app = express();
const { sequelize } = require('./models/index')
// const { rootRouter } = require('./routers/index')
var cors = require('cors')

//CORS 
app.use(cors())

//setting static file folder
app.use(express.static('public')); 
// app.use('/avatarBook', express.static('avatarBook'));


//convert data to json
app.use(express.json())

// app.use("/api/v1", rootRouter)

app.listen(3000, async () => {
    console.log(`listening http://localhost:3000`)
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})
