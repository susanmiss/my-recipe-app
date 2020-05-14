const express =  require('express')
const morgan =  require('morgan')
const slugify = require('slugify')
const bodyParser =  require('body-parser')
const cors =  require('cors')
const mongoose =  require('mongoose')
const recipeRoutes = require('./routes/recipeRoute')
require('dotenv').config()

const app = express();



//MIDDLEWARES:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(morgan('dev'))
app.use('/recipe', recipeRoutes);


//TESTING CONECTION:
app.get('/', (req, res) => {
    res.send('test')
})



//DB:
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, 
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(() =>console.log('DB connected'))
.catch(err =>console.log(err))







//LISTENING:
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});


module.export = app;

