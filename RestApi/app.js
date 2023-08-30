const express =  require('express');
require('dotenv').config();
const connectToDb = require('./db/connect');
const notFound = require('./middlewares/not-found');
require('express-async-errors');
const authRouter = require('./routers/authentication')


const app = express();
app.use(express.json());

const port = process.env.PORT || 3001

// routes
app.get('/', async (req, res) => {
    res.send('welcome to MedSync');
});

app.use('/api/v1/auth/', authRouter);

// middlewares
app.use(notFound);

const start = async () => {
    await connectToDb(process.env.MONGO_URI)
    app.listen(port, ()=> {
        console.log(`Application listening on port ${port}`)
    })
}

start();
