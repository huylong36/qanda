const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const argon2 = require('argon2')
const bodyParser = require('body-parser')

const categoryRouter = require('./routers/category');
const questionRouter = require('./routers/question');
const app = express();
const PORT = process.env.port || 5000;
dotenv.config()
const URL = 'mongodb+srv://Dohuylong:Dohuylong2000@cluster0.1epcr2f.mongodb.net/QandA?retryWrites=true&w=majority'


const connectDB = async () => {
    try {
        await mongoose.connect(URL, {

            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect ok')
    } catch (error) {
        console.log('error', error);
        process.exit(1)
    }
}
connectDB();
app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`server is running port  ${PORT}`);
})
app.use('/', categoryRouter)
app.use('/question', questionRouter)

app.use(express.json())

