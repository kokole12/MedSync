const express =  require('express');
require('dotenv').config();
const connectToDb = require('./db/connect');
const notFound = require('./middlewares/not-found');
require('express-async-errors');
const authRouter = require('./routers/authentication');
const patientRouter = require('./routers/patient');
const router = require('./routers/medicalRecord');
const userRouter = require('./routers/users');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const errorHandler = require('./middlewares/error-handler');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const port = process.env.PORT || 3001

// routes
app.get('/', async (req, res) => {
    res.send('welcome to MedSync');
});

app.use('/api/v1/auth/', authRouter);
app.use('/api/v1/patient/', patientRouter);
app.use('/api/v1/medical', router);
app.use('/api/v1/users/', userRouter);

// middlewares
app.use(notFound);
//app.use(errorHandler);

const start = async () => {
    await connectToDb(process.env.MONGO_URI)
    app.listen(port, ()=> {
        console.log(`Application listening on port ${port}`)
    })
}

start();
